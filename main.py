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
import cv2
import rospy
from config_loader import cfg, load_config
from actions import dispatch_action, run_action_sequence
from sensors import RobotSensors
from box_detector import find_box, goto_box
from tag_navigator import turn_to_tag, find_waypoint, get_thresholds_from_waypoint
from search import box_search, tag_search
from yolo_detector import detect_artag


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

    def __init__(self, sensors, mode="full"):
        # --- 状态机（支持初始模式切换） ---
        self.ID = 0
        self.step = 1
        self.level = "start_box"

        if mode == "return":
            self.ID = 5
            self.step = 2
            self.level = "reverse_moving"
        elif mode == "full":
            pass  # 默认值
        else:
            print(f"[警告] 未知初始模式 '{mode}'，使用默认完整流程")

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
    import argparse
    parser = argparse.ArgumentParser(description="机器人搬箱子任务")
    parser.add_argument("--mode", type=str, default=None,
                        help="初始模式: full(完整流程) / return(从返程开始)")
    args = parser.parse_args()

    load_config()
    rospy.init_node('image_listener')

    # 初始模式：命令行 > 配置文件 > 默认"full"
    mode = args.mode or cfg('system', 'initial_mode', default='full')
    print(f"[初始化] 模式: {mode}")

    sensors = RobotSensors()
    sensors.start()
    state = RobotState(sensors, mode=mode)

    time.sleep(cfg('timing', 'init_node_delay_sec', default=0.5))
    time.sleep(cfg('timing', 'startup_wait_sec', default=5.0))

    # 等待首帧图像
    while state.chest_img is None:
        state.sync_image()
        print('等待图像...')
        time.sleep(cfg('timing', 'camera_poll_interval_sec', default=0.1))

    print('启动')
    # 仅完整模式执行初始前进动作
    if mode == "full":
        init_act = cfg('initial_action')
        dispatch_action(init_act.get('action', 'go_fast2'), init_act.get('repeat', 1))
    else:
        print(f"[跳过] 初始动作（模式={mode}）")

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
                # 先尝试 YOLO 远距离检测 artag（解决 CV 距离不够的问题）
                yolo_tag = detect_artag(cv2.cvtColor(state.chest_img, cv2.COLOR_RGB2BGR))
                if yolo_tag and yolo_tag['conf'] > 0.3:
                    # YOLO 看到了 tag，朝它靠近
                    print(f"[YOLO] artag found conf={yolo_tag['conf']:.2f} x={yolo_tag['x']:.0f}, approaching")
                    img_w = state.chest_img.shape[1]
                    cx = yolo_tag['x']
                    # 简单比例控制：tag 在左边就左转，在右边就右转
                    if cx < img_w * 0.35:
                        act = 'BoxL_turn2' if state.step == 1 else 'L_turn2'
                        dispatch_action(act, 1)
                    elif cx > img_w * 0.65:
                        act = 'BoxR_turn2' if state.step == 1 else 'R_turn2'
                        dispatch_action(act, 1)
                    else:
                        # 居中，前进靠近
                        act = 'box_go2' if state.step == 1 else 'go_fast2'
                        dispatch_action(act, 1)
                else:
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
                            state.step = 1  # 重置 step，确保下次 box_transition 使用 step1 序列
                        else:
                            state.ID += 1
                else:
                    run_action_sequence(wp.get('on_other_tag', []))

        time.sleep(cfg('timing', 'main_loop_delay_sec', default=0.1))
