# -*- coding: utf-8 -*-
"""
=============================================================================
主入口 (main.py)
=============================================================================
RobotState 数据类统一管理所有运行时状态，消除全局变量。
主状态机循环组装各模块完成完整的搬箱子+标签导航任务。
=============================================================================
"""

import time
import rospy
from config_loader import cfg, load_config
from actions import dispatch_action, run_action_sequence
from sensors import RobotSensors
from box_detector import find_box, goto_box
from tag_navigator import turn_to_tag, find_waypoint, get_thresholds_from_waypoint
from search import box_search, tag_search


class RobotState:
    """
    机器人运行时状态容器 —— 替代所有全局变量。
    所有模块通过此对象读写状态，不再使用 global 关键字。
    """
    __slots__ = (
        'ID', 'step', 'level',
        'chest_img', 'chest_org',
        'chest_circle_x', 'chest_circle_y', 'box_color_selected',
        'marker',
        'no_tag_count', 'no_box_count', 'approach_forward_count',
        'last_unknown_tag',
        'sensors',
        '_wp_cache',  # 当前路径点缓存
    )

    def __init__(self, sensors):
        # --- 状态机 ---
        self.ID = 0               # 0=抓箱子, >0=标签导航
        self.step = 1              # 1=去程, 2=返程
        self.level = "start_box"   # 子状态

        # --- 图像 ---
        self.chest_img = None
        self.chest_org = None

        # --- 箱子检测 ---
        self.chest_circle_x = None
        self.chest_circle_y = None
        self.box_color_selected = None

        # --- AR 标签 ---
        self.marker = None

        # --- 搜索计数 ---
        self.no_tag_count = 0
        self.no_box_count = 0
        self.approach_forward_count = 0
        self.last_unknown_tag = None

        # --- 传感器 ---
        self.sensors = sensors

        # --- 当前路径点缓存 ---
        self._wp_cache = {}

    def sync_image(self):
        """从传感器同步最新图像帧"""
        self.chest_img = self.sensors.chest_img
        self.chest_org = self.sensors.chest_org

    def cache_waypoint(self, wp):
        """缓存当前路径点，供 turn_to_tag 内部读取偏移量"""
        self._wp_cache = wp if wp else {}

    def get_waypoint(self, key, default=0):
        """读取缓存的路径点字段值"""
        return self._wp_cache.get(key, default)


# ============================================================================
# 主程序
# ============================================================================

if __name__ == '__main__':
    load_config()
    rospy.init_node('image_listener')

    sensors = RobotSensors()
    sensors.start()
    state = RobotState(sensors)

    time.sleep(cfg('timing', 'init_node_delay_sec', default=0.5))
    time.sleep(cfg('timing', 'startup_wait_sec', default=5.0))

    # 等待首帧图像
    while state.chest_img is None:
        state.sync_image()
        print('等待图像...')
        time.sleep(cfg('timing', 'camera_poll_interval_sec', default=0.1))

    print('启动')
    init_act = cfg('initial_action')
    dispatch_action(init_act.get('action', 'go_fast2'), init_act.get('repeat', 1))

    # ========== 主控制循环 ==========
    while not rospy.is_shutdown():
        state.sync_image()

        # ===== 阶段一: 抓箱子 (ID == 0) =====
        if state.ID == 0:
            if state.level == "start_box":
                find_box(state.chest_img, state)
                goto_box(state)
                if state.chest_circle_x is None:
                    box_search(state)
                else:
                    state.no_box_count = 0
                time.sleep(cfg('timing', 'box_loop_delay_sec', default=0.1))

            elif state.level == "end_box":
                # 超额前进后退回
                max_steps = cfg('box_detection', 'max_approach_steps', default=5)
                if state.approach_forward_count > max_steps:
                    excess = state.approach_forward_count - max_steps
                    print(f"同方向后退 {excess} 步 (前进{state.approach_forward_count}-上限{max_steps})")
                    dispatch_action('Box_Back', excess)
                state.approach_forward_count = 0

                seq = cfg('box_transition', f'step{state.step}', default=[])
                run_action_sequence(seq)
                if state.step == 2:
                    state.step = 1
                state.ID += 1

        # ===== 阶段二: AR 标签导航 (ID > 0) =====
        else:
            state.marker = sensors.get_nearest_marker()

            need_fallback = False
            if len(state.marker) == 0:
                need_fallback = True
            else:
                wp = find_waypoint(state.marker[0], f'step{state.step}')
                if wp is None:
                    need_fallback = True
                    if state.marker[0] != state.last_unknown_tag:
                        print(f"标签 {state.marker[0]} 在步骤 {state.step} 中无路径点配置，执行搜索")
                        state.last_unknown_tag = state.marker[0]

            if need_fallback:
                tag_search(state)

            else:
                state.no_tag_count = 0
                state.last_unknown_tag = None
                tag_x = state.marker[1]
                tag_y = state.marker[2]
                tag_yaw = state.marker[3] + cfg('tag_alignment', 'yaw_offset_deg', default=90)

                if state.ID == wp['tag_id'] or wp.get('match_any', False):
                    if 'set_level' in wp:
                        state.level = wp['set_level']

                    state.cache_waypoint(wp)
                    thresholds = get_thresholds_from_waypoint(wp)
                    result = turn_to_tag(
                        tag_x, tag_y, tag_yaw, state,
                        x_threshold=thresholds['x_threshold'],
                        y_threshold=thresholds['y_threshold'],
                        theta_threshold_left=thresholds['theta_L'],
                        theta_threshold_right=thresholds['theta_R']
                    )

                    if result:
                        print(f'{wp["tag_id"]}号码对正完毕')
                        run_action_sequence(wp.get('on_aligned', []))

                        if 'transition_to_step' in wp:
                            state.step = wp['transition_to_step']
                        elif wp.get('reset_mission', False):
                            state.ID = 0
                            state.level = "start_box"
                        else:
                            state.ID += 1
                else:
                    run_action_sequence(wp.get('on_other_tag', []))

        time.sleep(cfg('timing', 'main_loop_delay_sec', default=0.1))
