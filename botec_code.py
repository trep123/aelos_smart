# -*- coding: utf-8 -*-
"""
=============================================================================
机器人搬箱子任务主控制脚本 (botec_code.py)
=============================================================================

任务流程概览:
  本脚本实现了一个完整的机器人自主导航与操作任务，分为两大阶段：

  阶段一 (ID == 0): 抓箱子
    1. 通过摄像头采集图像，使用 HSV 颜色分割定位绿色箱子
    2. 根据箱子在画面中的 x/y 坐标调整机器人位姿（左右平移 + 前进后退）
    3. 到达合适位置后执行抓取动作序列（下蹲 → 夹取 → 抬起）
    4. 箱子抓取完成后进入 AR 标签导航阶段

  阶段二 (ID > 0): AR 标签导航
    1. 检测视野内的 AR 标签 (AprilTag / Alvar)，取 ID 最小的作为目标
    2. 通过多级逼近策略 (turn_to_tag) 使机器人逐步对正标签
       - 大角度转向 → 粗调平移 → 快速靠近 → 方向对正 → 精调平移 → 逐级逼近
    3. 到达当前标签后执行对应的过渡动作序列（前进/侧移/转向）
    4. 依次经过所有路径点（去程 1→2→3→4→5，返程 5→6→7→1）
    5. 回到起点标签后重置任务，重新开始抓箱子循环

配置文件驱动:
  所有可调参数（HSV范围、阈值、偏移量、时序、动作名称）均从 config.json
  读取。若文件缺失或格式错误，自动回退到内置默认值，保证系统正常运行。

ROS 节点:
  rospy.init_node('image_listener') —— 与 image_Tag_converter.py 共享话题

线程模型:
  - 主线程: 状态机循环 (while not rospy.is_shutdown())
  - 守护线程 (th2): 图像采集 get_img()，持续更新全局 Chest_img
  - ROS 回调线程: 自动处理图像/标签话题消息的订阅回调

全局状态变量:
  - Chest_img / ChestOrg : 当前摄像头图像帧
  - chest_circle_x / y   : 检测到的箱子中心像素坐标
  - marker               : 当前检测到的最近 AR 标签信息
  - Debug                : 调试模式开关（显示 OpenCV 窗口）
  - ID / step / level    : 主状态机变量（详见各变量注释）
=============================================================================
"""

import time
import cv2
import threading
import numpy as np
import rospy
import math
from functools import wraps
import sys
import json
import os
import re

from image_Tag_converter import ImgConverter
from image_Tag_converter import TagConverter


# ============================================================================
# 第一部分: 配置加载基础设施
# ============================================================================
# 本节实现配置系统的核心：JSON 文件加载 → 缓存 → 逐级键值访问。
# 设计原则：
#   1. 配置文件缺失时自动回退到内置默认值（确保机器人不会"罢工"）
#   2. 配置仅加载一次，通过模块级 _CONFIG 缓存（避免重复 I/O）
#   3. cfg() 函数提供类似 lodash.get() 的逐级安全访问（避免 KeyError）
#   4. JSON 支持 // 行内注释（加载时自动去除）
# ============================================================================

_CONFIG = None       # 模块级配置缓存，None 表示尚未加载
_CONFIG_PATH = None  # 记录实际加载的配置文件路径（调试用）


def _build_default_config():
    """
    构建内置默认配置字典

    此函数存在的意义：
      - 当 config.json 文件缺失、路径错误或 JSON 格式损坏时，
        系统不会崩溃，而是使用这些硬编码的默认值继续运行。
      - 默认值与原始代码中的硬编码参数完全一致，保证向后兼容。

    配置结构说明（与 config.json 完全对应，共 14 个顶级节）:
      system            系统级路径与调试设置
      camera            摄像头话题与图像采集时序
      image_processing  OpenCV 图像处理参数（高斯模糊、腐蚀膨胀）
      colors            HSV 颜色空间阈值（绿色箱子、橙色箱子）
      box_detection     箱子对正阈值与动作 ROS 名称
      actions           29 个动作包装函数的执行后等待时间
      tag_alignment     AR 标签对正的阈值与内部偏移量
      ar_tags           AR 标签检测设置（话题、扫描参数）
      timing            全局时序与初始化延迟
      initial_action    启动后首次执行的动作
      box_transition    搬箱子完成后的过渡动作序列
      no_marker_fallback 未检测到标签时的兜底动作（按状态分流）
      waypoints         全部路径点定义（step1 去程 + step2 返程）

    返回值:
      dict: 完整的默认配置字典
    """
    return {
        "system": {
            "ros_workspace_path": "/home/lemon/catkin_ws/src/aelos_smart_ros",
            "debug": False,
            "debug_display_window": "Box",
            "debug_display_wait_ms": 2000
        },
        "camera": {
            "topic": "/usb_cam_chest/image_raw",
            "image_fetch_interval_sec": 0.3,
            "image_acquire_delay_sec": 0.05,
            "image_retry_delay_sec": 0.3
        },
        "image_processing": {
            "gaussian_blur": {"kernel_size": [3, 3]},
            "erosion": {"iterations": 2},
            "dilation": {"kernel_size": [4, 4], "iterations": 2},
            "min_contour_area": 200
        },
        "colors": {
            "green":  {"hsv_lower": [38, 92, 91], "hsv_upper": [87, 255, 255]},
            "yellow": {"hsv_lower": [22, 80, 100], "hsv_upper": [38, 255, 255]},
            "orange": {"hsv_lower": [0, 107, 122], "hsv_upper": [19, 255, 255]}
        },
        "box_priority": {
            "color_order": ["green", "yellow"]
        },
        "box_detection": {
            "thresholds": {
                "x_left_large": 275, "x_left_small": 295,
                "x_right_small": 345, "x_right_large": 365,
                "y_forward": 300, "y_backward": 340
            },
            "no_coordinate_wait_sec": 0.3,
            "action_sleep_sec": 0.5,
            "grab_tolerance": 0,
            "max_approach_steps": 5,
            "actions": {
                "left_large": "Left3move", "left_small": "Left02move",
                "right_large": "Right3move", "right_small": "Right02move",
                "forward": "FastForward1s", "backward": "Back1Run",
                "grab_approach": "Forwalk01", "grab": "GrabCube",
                "lift": "LiftCubeUp"
            }
        },
        "actions": {
            "sleep_times": {
                "Box_Down": 0.5, "Box_Back": 0.5, "Box_Back1": 0.5,
                "Back2": 0.5, "Back1": 0.5,
                "go_fast": 0.5, "go_fast1": 0.5, "go_fast2": 0.5, "go_fast3": 0.5,
                "box_go": 0.5, "box_go1": 1.0, "box_go2": 1.0, "box_go3": 1.0,
                "L_move1": 0.5, "L_move2": 0.5,
                "BoxL_move1": 1.0, "BoxL_move2": 1.0,
                "R_move1": 0.5, "R_move2": 0.5,
                "BoxR_move1": 1.0, "BoxR_move2": 1.0,
                "L_turn1": 0.5, "L_turn2": 0.5,
                "BoxL_turn1": 1.0, "BoxL_turn2": 1.0,
                "R_turn1": 0.5, "R_turn2": 0.5,
                "BoxR_turn1": 1.0, "BoxR_turn2": 1.0
            }
        },
        "tag_alignment": {
            "defaults": {"x_threshold": 0.03, "y_threshold": 0.02, "theta_threshold": 5},
            "offsets": {
                "back_threshold": 0.03, "theta_hard_limit": 35,
                "coarse_y_offset": 0.05, "fast_approach_offset": 0.2,
                "slow_approach_offset": 0.12, "fine_approach_offset": 0.06
            },
            "yaw_offset_deg": 90
        },
        "ar_tags": {
            "topic": "/chest/ar_pose_marker",
            "min_id_threshold": 15, "min_valid_id": 1,
            "scan_iterations": 20, "scan_delay_sec": 0.01
        },
        "timing": {
            "init_node_delay_sec": 0.5, "startup_wait_sec": 5.0,
            "camera_poll_interval_sec": 0.1, "box_loop_delay_sec": 0.1,
            "main_loop_delay_sec": 0.1, "goto_box_wait_sec": 0.3
        },
        "initial_action": {"action": "go_fast2", "repeat": 1},
        "box_transition": {
            "step1": [{"action": "box_go2", "repeat": 2}, {"action": "BoxR_turn2", "repeat": 1}],
            "step2": [{"action": "BoxR_turn2", "repeat": 3}]
        },
        "no_marker_fallback": {
            "id1_end_box":       {"action": "BoxR_turn2", "repeat": 1},
            "id1_4_step1_early": {"action": "Box_Back",   "repeat": 1},
            "id5_step2_start":   {"action": "R_turn2",    "repeat": 1},
            "id5_7_step2_late":  {"action": "Back2",      "repeat": 1}
        },
        "reset_sequence_step1": [],
        "reset_sequence_step2": [],
        "waypoints": {
            "step1": [
                {"tag_id": 1, "x_offset": 0.08, "y_offset": 0.0,  "theta_offset": 2,   "set_level": "start_moving",
                 "on_aligned": [{"action": "box_go2", "repeat": 2}],
                 "on_other_tag": [{"action": "box_go2", "repeat": 2}]},
                {"tag_id": 2, "x_offset": 0.12, "y_offset": 0.0,  "theta_offset": 0,
                 "on_aligned": [{"action": "BoxR_move2", "repeat": 3}],
                 "on_other_tag": [{"action": "BoxR_move2", "repeat": 1}]},
                {"tag_id": 3, "x_offset": 0.12, "y_offset": 0.11, "theta_offset": 0,
                 "on_aligned": [{"action": "BoxR_move2", "repeat": 1}, {"action": "BoxR_move1", "repeat": 1},
                                {"action": "box_go2", "repeat": 2}, {"action": "box_go1", "repeat": 1}],
                 "on_other_tag": [{"action": "BoxR_move2", "repeat": 1}]},
                {"tag_id": 4, "x_offset": 0.12, "y_offset": -0.1, "theta_offset": 0,
                 "on_aligned": [{"action": "BoxL_move2", "repeat": 3}],
                 "on_other_tag": [{"action": "BoxL_move2", "repeat": 1}]},
                {"tag_id": 5, "x_offset": 0.12, "y_offset": 0.0,  "theta_offset": 0,
                 "on_aligned": [{"action": "box_go2", "repeat": 3}, {"action": "Box_Down", "repeat": 1},
                                {"action": "R_turn2", "repeat": 3}],
                 "transition_to_step": 2}
            ],
            "step2": [
                {"tag_id": 5, "x_offset": 0.08, "y_offset": 0.0,  "theta_offset": 180,
                 "theta_threshold": 15, "set_level": "reverse_moving",
                 "on_aligned": [{"action": "go_fast2", "repeat": 1}, {"action": "go_fast1", "repeat": 2}]},
                {"tag_id": 6, "x_offset": 0.05, "y_offset": -0.1, "theta_offset": 0,
                 "on_aligned": [{"action": "L_move2", "repeat": 4}, {"action": "go_fast2", "repeat": 2},
                                {"action": "go_fast1", "repeat": 1}]},
                {"tag_id": 7, "x_offset": 0.06, "y_offset": 0.10, "theta_offset": 0,
                 "on_aligned": [{"action": "R_move2", "repeat": 5}]},
                {"tag_id": 1, "x_offset": 0.1,  "y_offset": 0.0,  "theta_offset": 180,
                 "theta_threshold": 15, "match_any": True, "reset_mission": True,
                 "on_aligned": [{"action": "go_fast2", "repeat": 2}]}
            ]
        }
    }


def load_config(config_path=None):
    """
    从 JSON 文件加载配置（单次加载 + 缓存）

    参数:
      config_path : str 或 None
        配置文件路径。若为 None，默认在与当前脚本同目录下查找 'config.json'

    返回值:
      dict: 解析后的配置字典（若加载失败则返回内置默认配置）

    异常处理:
      FileNotFoundError  → 配置文件不存在，打印警告，使用内置默认
      json.JSONDecodeError → JSON 格式错误，打印警告，使用内置默认

    缓存机制:
      首次调用时读取并缓存到全局变量 _CONFIG，后续调用直接返回缓存值。
      如需重新加载（例如配置文件被修改），可手动设置 _CONFIG = None 后再次调用。

    副作用:
      设置全局变量 _CONFIG（缓存）和 _CONFIG_PATH（调试用）
    """
    global _CONFIG, _CONFIG_PATH
    # 已缓存，直接返回
    if _CONFIG is not None:
        return _CONFIG
    # 确定配置文件路径
    if config_path is None:
        config_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'config.json')
    _CONFIG_PATH = config_path
    try:
        with open(config_path, 'r', encoding='utf-8') as f:
            raw_text = f.read()
        # 去除 // 行内注释（JSON 标准不支持注释，这里做预处理）
        # 逐行处理：删除每行中 // 之后的内容
        lines = []
        for line in raw_text.split('\n'):
            stripped = re.sub(r'//.*$', '', line)
            lines.append(stripped)
        cleaned_text = '\n'.join(lines)
        _CONFIG = json.loads(cleaned_text)
        print(f"已加载配置文件: {config_path}")
    except FileNotFoundError:
        print(f"警告: 配置文件不存在 ({config_path})，使用内置默认配置")
        _CONFIG = _build_default_config()
    except json.JSONDecodeError as e:
        print(f"警告: 配置文件格式错误 ({e})，使用内置默认配置")
        _CONFIG = _build_default_config()
    return _CONFIG


def cfg(*keys, default=None):
    """
    逐级安全访问嵌套配置字典（类似 lodash.get）

    用法示例:
      cfg('tag_alignment', 'defaults', 'x_threshold')
        → 等价于 CONFIG['tag_alignment']['defaults']['x_threshold']
      cfg('colors', 'blue', 'hsv_lower', default=[100,100,100])
        → 若 'blue' 不存在，返回 [100, 100, 100]

    参数:
      *keys  : 可变位置参数，每项是一级键名，按顺序逐层查找
      default: 当任意一级键不存在时返回的默认值

    返回值:
      找到的值（任意类型），或 default（若键不存在）

    安全性:
      与直接 [] 访问不同，此函数不会因 KeyError 崩溃。
      如果某个中间节点不是 dict（例如是字符串）则返回 default。
      如果最终值 is None，也返回 default（区分"键不存在"和"值为 null"）。
    """
    d = load_config()  # 确保配置已加载
    for k in keys:
        if isinstance(d, dict):
            d = d.get(k)
        else:
            return default
    return d if d is not None else default


# ============================================================================
# 第二部分: 应用系统路径配置并导入 ROS 动作模块
# ============================================================================

sys.path.append(cfg('system', 'ros_workspace_path',
                    default="/home/lemon/catkin_ws/src/aelos_smart_ros"))
from leju import base_action


# ============================================================================
# 第三部分: 全局状态变量声明
# ============================================================================

Chest_img = None       # 当前有效的摄像头图像帧
ChestOrg = None        # 原始图像引用
marker = None          # 当前检测到的最近 AR 标签信息 [id, x, y, yaw_deg, timestamp]
chest_circle_x = None  # 箱子中心 x 像素坐标（None=未检测到）
chest_circle_y = None  # 箱子中心 y 像素坐标（None=未检测到）

Debug = cfg('system', 'debug', default=False)  # 调试开关

# HSV 颜色范围（从配置转为元组供 OpenCV 使用）
color_range = {
    'green':  (tuple(cfg('colors', 'green',  'hsv_lower', default=[38, 92, 91])),
               tuple(cfg('colors', 'green',  'hsv_upper', default=[87, 255, 255]))),
    'yellow': (tuple(cfg('colors', 'yellow', 'hsv_lower', default=[22, 80, 100])),
               tuple(cfg('colors', 'yellow', 'hsv_upper', default=[38, 255, 255]))),
    'orange': (tuple(cfg('colors', 'orange', 'hsv_lower', default=[0, 107, 122])),
               tuple(cfg('colors', 'orange', 'hsv_upper', default=[19, 255, 255])))
}

# 当前选中的箱子颜色（由 find_box 设置，供日志/调试用）
box_color_selected = None


# ============================================================================
# 第四部分: 动作等待时间辅助函数
# ============================================================================

def _action_sleep(func_name):
    """返回指定动作函数的执行后等待时间（秒）"""
    return cfg('actions', 'sleep_times', func_name, default=0.5)


# ============================================================================
# 第五部分: 动作包装函数（共 29 个）
# 每个函数封装 base_action.action() 并执行 n 次，每次执行后等待
# ============================================================================

# --- 5.1 放下箱子 / 后退类 ---

def Box_Down(n):
    """放下箱子 —— 执行 'PutCubeDown' 动作 n 次"""
    for i in range(0, n):
        base_action.action("PutCubeDown")
        time.sleep(_action_sleep('Box_Down'))


def Box_Back(n):
    """抱箱子后退 —— 执行 'BoxBack1Run' 动作 n 次"""
    for i in range(0, n):
        base_action.action("BoxBack1Run")
        time.sleep(_action_sleep('Box_Back'))


def Box_Back1(n):
    """抱箱子后退（变体）—— 执行 'BoxBack2-1' 动作 n 次"""
    for i in range(0, n):
        base_action.action("BoxBack2-1")
        time.sleep(_action_sleep('Box_Back1'))


def Back2(n):
    """空手后退两步 —— 执行 'Back2Run' 动作 n 次"""
    for i in range(0, n):
        base_action.action("Back2Run")
        time.sleep(_action_sleep('Back2'))


def Back1(n):
    """空手后退一步 —— 执行 'Back1Run' 动作 n 次"""
    for i in range(0, n):
        base_action.action("Back1Run")
        time.sleep(_action_sleep('Back1'))


# --- 5.2 前进类 ---

def go_fast(n):
    """快速小步前进 —— 执行 'Forwalk01' 动作 n 次"""
    for i in range(0, n):
        base_action.action("Forwalk01")
        time.sleep(_action_sleep('go_fast'))


def go_fast1(n):
    """快速前进一步（~1s步行距离）—— 执行 'FastForward1s' 动作 n 次"""
    for i in range(0, n):
        base_action.action("FastForward1s")
        time.sleep(_action_sleep('go_fast1'))


def go_fast2(n):
    """快速前进两步（~2s步行距离）—— 执行 'FastForward2s' 动作 n 次"""
    for i in range(0, n):
        base_action.action("FastForward2s")
        time.sleep(_action_sleep('go_fast2'))


def go_fast3(n):
    """快速前进三步（~3s步行距离）—— 执行 'FastForward3s' 动作 n 次"""
    for i in range(0, n):
        base_action.action("FastForward3s")
        time.sleep(_action_sleep('go_fast3'))


def box_go(n):
    """抱箱子小步前进 —— 执行 'BoxForward02' 动作 n 次"""
    for i in range(0, n):
        base_action.action("BoxForward02")
        time.sleep(_action_sleep('box_go'))


def box_go1(n):
    """抱箱子前进一步 —— 执行 'BoxForward1s' 动作 n 次"""
    for i in range(0, n):
        base_action.action("BoxForward1s")
        time.sleep(_action_sleep('box_go1'))


def box_go2(n):
    """抱箱子前进两步 —— 执行 'BoxForward2s' 动作 n 次"""
    for i in range(0, n):
        base_action.action("BoxForward2s")
        time.sleep(_action_sleep('box_go2'))


def box_go3(n):
    """抱箱子前进三步 —— 执行 'BoxForward3s' 动作 n 次"""
    for i in range(0, n):
        base_action.action("BoxForward3s")
        time.sleep(_action_sleep('box_go3'))


# --- 5.3 侧移类 ---

def L_move1(n):
    """左侧移小步（~1.5cm）—— 执行 'Left02move' 动作 n 次"""
    for i in range(0, n):
        base_action.action("Left02move")
        print('左移1.5cm')
        time.sleep(_action_sleep('L_move1'))


def L_move2(n):
    """左侧移大步 —— 执行 'move_left' 动作 n 次"""
    for i in range(0, n):
        base_action.action('move_left')
        time.sleep(_action_sleep('L_move2'))


def BoxL_move1(n):
    """抱箱子左侧移小步 —— 执行 'BoxLeft1' 动作 n 次"""
    for i in range(0, n):
        base_action.action("BoxLeft1")
        time.sleep(_action_sleep('BoxL_move1'))


def BoxL_move2(n):
    """抱箱子左侧移大步 —— 执行 'Box_move_left' 动作 n 次"""
    for i in range(0, n):
        base_action.action('Box_move_left')
        time.sleep(_action_sleep('BoxL_move2'))


def R_move1(n):
    """右侧移小步 —— 执行 'Right02move' 动作 n 次"""
    for i in range(0, n):
        base_action.action("Right02move")
        time.sleep(_action_sleep('R_move1'))


def R_move2(n):
    """右侧移大步 —— 执行 'move_right' 动作 n 次"""
    for i in range(0, n):
        base_action.action('move_right')
        time.sleep(_action_sleep('R_move2'))


def BoxR_move1(n):
    """抱箱子右侧移小步 —— 执行 'BoxRight1' 动作 n 次"""
    for i in range(0, n):
        base_action.action("BoxRight1")
        time.sleep(_action_sleep('BoxR_move1'))


def BoxR_move2(n):
    """抱箱子右侧移大步 —— 执行 'Box_move_right' 动作 n 次"""
    for i in range(0, n):
        base_action.action('Box_move_right')
        time.sleep(_action_sleep('BoxR_move2'))


# --- 5.4 转向类 ---

def L_turn1(n):
    """左转小角度（~7°）—— 执行 'turn003L' 动作 n 次"""
    for i in range(0, n):
        base_action.action("turn003L")
        time.sleep(_action_sleep('L_turn1'))


def L_turn2(n):
    """左转大角度（~1s持续转）—— 执行 'LeftTurn1s' 动作 n 次"""
    for i in range(0, n):
        base_action.action("LeftTurn1s")
        time.sleep(_action_sleep('L_turn2'))


def BoxL_turn1(n):
    """抱箱子左转小角度 —— 执行 'BoxTurnL1' 动作 n 次"""
    for i in range(0, n):
        base_action.action("BoxTurnL1")
        time.sleep(_action_sleep('BoxL_turn1'))


def BoxL_turn2(n):
    """抱箱子左转大角度 —— 执行 'BoxLeftTurn1s' 动作 n 次"""
    for i in range(0, n):
        base_action.action("BoxLeftTurn1s")
        time.sleep(_action_sleep('BoxL_turn2'))


def R_turn1(n):
    """右转小角度（~7°）—— 执行 'turn003R' 动作 n 次"""
    for i in range(0, n):
        base_action.action("turn003R")
        time.sleep(_action_sleep('R_turn1'))


def R_turn2(n):
    """右转大角度（~1s持续转）—— 执行 'RightTurn1s' 动作 n 次"""
    for i in range(0, n):
        base_action.action("RightTurn1s")
        time.sleep(_action_sleep('R_turn2'))


def BoxR_turn1(n):
    """抱箱子右转小角度 —— 执行 'BoxTurnR1' 动作 n 次"""
    for i in range(0, n):
        base_action.action("BoxTurnR1")
        time.sleep(_action_sleep('BoxR_turn1'))


def BoxR_turn2(n):
    """抱箱子右转大角度 —— 执行 'BoxRightTurn1s' 动作 n 次"""
    for i in range(0, n):
        base_action.action("BoxRightTurn1s")
        time.sleep(_action_sleep('BoxR_turn2'))


# ============================================================================
# 第六部分: 动作注册表与调度系统
# 将字符串函数名映射到可调用对象，实现配置驱动的动作调度
# ============================================================================

_ACTION_REGISTRY = {
    'Box_Down': Box_Down, 'Box_Back': Box_Back, 'Box_Back1': Box_Back1,
    'Back2': Back2, 'Back1': Back1,
    'go_fast': go_fast, 'go_fast1': go_fast1, 'go_fast2': go_fast2, 'go_fast3': go_fast3,
    'box_go': box_go, 'box_go1': box_go1, 'box_go2': box_go2, 'box_go3': box_go3,
    'L_move1': L_move1, 'L_move2': L_move2, 'BoxL_move1': BoxL_move1, 'BoxL_move2': BoxL_move2,
    'R_move1': R_move1, 'R_move2': R_move2, 'BoxR_move1': BoxR_move1, 'BoxR_move2': BoxR_move2,
    'L_turn1': L_turn1, 'L_turn2': L_turn2, 'BoxL_turn1': BoxL_turn1, 'BoxL_turn2': BoxL_turn2,
    'R_turn1': R_turn1, 'R_turn2': R_turn2, 'BoxR_turn1': BoxR_turn1, 'BoxR_turn2': BoxR_turn2,
}


def dispatch_action(name, repeat):
    """根据名称字符串调用对应的动作函数"""
    action_func = _ACTION_REGISTRY.get(name)
    if action_func is None:
        print(f"警告: 未知动作 '{name}'")
        return
    action_func(repeat)


def run_action_sequence(sequence):
    """依次执行动作序列 [{"action": "函数名", "repeat": 次数}, ...]"""
    for item in sequence:
        dispatch_action(item['action'], item['repeat'])


# ============================================================================
# 第七部分: 图像采集后台线程
# ============================================================================

def get_img():
    """后台线程：持续从 ROS 摄像头话题获取图像帧并更新全局 Chest_img"""
    global Chest_img, ChestOrg
    global ret
    image_reader_chest = ImgConverter(
        camera_topic=cfg('camera', 'topic', default='/usb_cam_chest/image_raw')
    )
    while True:
        ret, ChestOrg = image_reader_chest.chest_image()
        time.sleep(cfg('camera', 'image_fetch_interval_sec', default=0.3))
        if ChestOrg is not None:
            Chest_img = ChestOrg
            time.sleep(cfg('camera', 'image_acquire_delay_sec', default=0.05))
        else:
            time.sleep(cfg('camera', 'image_retry_delay_sec', default=0.3))
            print("暂未获取到图像")


th2 = threading.Thread(target=get_img)
th2.setDaemon(True)
th2.start()


# ============================================================================
# 第八部分: 箱子检测 —— HSV 颜色分割
# ============================================================================

def find_box(img):
    """
    多颜色优先级箱子检测

    策略:
      1. 按 config.box_priority.color_order 中定义的顺序依次扫描每种颜色
      2. 对每种颜色做 HSV 分割 → 形态学处理 → 轮廓检测
      3. 同颜色有多个方块时选面积最大的（面积∝距离: 面积大=距离近）
      4. 找到高优先级颜色的方块后立即返回，不再检查低优先级颜色
      5. 若所有颜色均未找到方块，清空坐标等待下一帧

    全局变量副作用:
      设置 chest_circle_x, chest_circle_y（选中的方块中心坐标）
      设置 box_color_selected（选中的颜色名，供日志/调试）
    """
    global chest_circle_x, chest_circle_y, box_color_selected
    if Chest_img is None:
        print('等待获取图像中...')
        time.sleep(cfg('camera', 'image_retry_delay_sec', default=0.3))
        return

    box_img = img
    box_img_bgr = cv2.cvtColor(box_img, cv2.COLOR_RGB2BGR)
    box_img_hsv = cv2.cvtColor(box_img, cv2.COLOR_BGR2HSV)
    blurred = cv2.GaussianBlur(
        box_img_hsv,
        tuple(cfg('image_processing', 'gaussian_blur', 'kernel_size', default=[3, 3])),
        0
    )

    # 按优先级依次尝试每种颜色
    color_order = cfg('box_priority', 'color_order', default=['green', 'yellow'])
    erode_iters = cfg('image_processing', 'erosion', 'iterations', default=2)
    dilate_kernel = tuple(cfg('image_processing', 'dilation', 'kernel_size', default=[4, 4]))
    dilate_iters = cfg('image_processing', 'dilation', 'iterations', default=2)

    for color_name in color_order:
        # 跳过配置中未定义的颜色
        if color_name not in color_range:
            continue

        lower, upper = color_range[color_name]
        mask = cv2.inRange(blurred, lower, upper)
        eroded = cv2.erode(mask, None, iterations=erode_iters)
        opened = cv2.dilate(eroded, np.ones(dilate_kernel, np.uint8), iterations=dilate_iters)
        (contours, hierarchy) = cv2.findContours(opened, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)

        if len(contours) == 0:
            continue  # 此颜色未找到方块，尝试下一个颜色

        # 选择面积最大的轮廓（同颜色中距离最近）
        areas = [math.fabs(cv2.contourArea(cn)) for cn in contours]
        max_index = np.argmax(areas)
        max_area = areas[max_index]
        min_area = cfg('image_processing', 'min_contour_area', default=200)
        if max_area < min_area:
            continue  # 面积太小视为噪点，尝试下一个颜色
        (chest_circle_x, chest_circle_y), chest_radius = cv2.minEnclosingCircle(contours[max_index])

        box_color_selected = color_name
        cv2.circle(img, (int(chest_circle_x), int(chest_circle_y)), int(chest_radius), (0, 0, 255))
        print(f'[{color_name}] x={chest_circle_x:.0f} y={chest_circle_y:.0f} area={areas[max_index]:.0f}')

        if Debug:
            cv2.imshow(cfg('system', 'debug_display_window', default='Box'), img)
            cv2.waitKey(cfg('system', 'debug_display_wait_ms', default=2000))
        return  # 找到高优先级颜色方块，立即返回

    # 所有颜色均未找到方块 —— 清除旧坐标防止 goto_box 误触发
    box_color_selected = None
    chest_circle_x = None
    chest_circle_y = None


# ============================================================================
# 头部摄像头环顾搜索
# ============================================================================

    box_color_selected = None
    chest_circle_x = None
    chest_circle_y = None


# ============================================================================
# 第九部分: 箱子逼近与抓取
# ============================================================================

def goto_box():
    """
    根据箱子像素坐标调整机器人位姿: 先调 x(左右) → 再调 y(前后) → 抓取
    抓取成功后设置 level = "end_box"
    累计前进次数 _approach_forward_count，用于抓取后同方向退回过量步数
    """
    global level, ID, _approach_forward_count
    t = cfg('box_detection', 'thresholds')
    act = cfg('box_detection', 'actions')
    action_sleep = cfg('box_detection', 'action_sleep_sec', default=0.5)
    no_coord_wait = cfg('box_detection', 'no_coordinate_wait_sec', default=0.3)

    # 抓取容忍像素: 在移动阈值基础上向内收窄 tol px
    grab_tol = cfg('box_detection', 'grab_tolerance', default=0)

    if chest_circle_x is None:
        print('等待获取坐标中...')
        time.sleep(no_coord_wait)
    else:
        if chest_circle_x < t['x_left_large']:
            print("正在左侧移（大步）", chest_circle_x)
            base_action.action(act['left_large'])
            time.sleep(action_sleep)
        elif chest_circle_x < t['x_left_small']:
            print("正在左侧移（小步）", chest_circle_x)
            base_action.action(act['left_small'])
            time.sleep(action_sleep)
        elif chest_circle_x > t['x_right_large']:
            print("正在右侧移（大步）", chest_circle_x)
            base_action.action(act['right_large'])
            time.sleep(action_sleep)
        elif chest_circle_x > t['x_right_small']:
            print("正在右侧移（小步）", chest_circle_x)
            base_action.action(act['right_small'])
            time.sleep(action_sleep)
        else:
            if chest_circle_y < t['y_forward']:
                print("前进", chest_circle_y)
                base_action.action(act['forward'])
                _approach_forward_count += 1
                time.sleep(action_sleep)
            elif chest_circle_y >= t['y_backward']:
                print("后退", chest_circle_y)
                base_action.action(act['backward'])
                time.sleep(action_sleep)
            elif (t['x_left_small'] + grab_tol <= chest_circle_x <= t['x_right_small'] - grab_tol and
                  t['y_forward'] + grab_tol <= chest_circle_y <= t['y_backward'] - grab_tol):
                print(f"开始抱箱子 [tol=±{grab_tol}px]")
                base_action.action(act['grab_approach'])
                base_action.action(act['grab'])
                base_action.action(act['lift'])
                level = "end_box"


# ============================================================================
# 第十部分: AR 标签对正 —— 多级逼近策略
# ============================================================================

def turn_to_tag(dis_x, dis_y, theta, x_offset=0, y_offset=0, theta_offset=0,
                x_threshold=0.03, y_threshold=0.02,
                theta_threshold_left=5, theta_threshold_right=5):
    """
    AR 标签多级逼近对正 —— 9 级决策树

    theta_threshold_left  : 正角度(左偏)容忍度(°), theta_error > 此值触发左转
    theta_threshold_right : 负角度(右偏)容忍度(°), theta_error < -此值触发右转
    可独立配置左右不对称容忍度（如向左30°容忍, 向右仅20°）

    优先级: 后退 > 大转向 > 快速靠近 > 方向对正 > 粗平移 > 精平移 > 慢靠近 > 精靠近
    """
    is_turn_done = False
    check_flag = 0

    offsets = cfg('tag_alignment', 'offsets')
    back_threshold_offset = offsets.get('back_threshold', 0.03)
    theta_hard_limit = offsets.get('theta_hard_limit', 35)
    coarse_y_offset = offsets.get('coarse_y_offset', 0.05)
    fast_approach_offset = offsets.get('fast_approach_offset', 0.2)
    slow_approach_offset = offsets.get('slow_approach_offset', 0.12)
    fine_approach_offset = offsets.get('fine_approach_offset', 0.06)

    x_error = dis_x - x_offset
    y_error = dis_y - y_offset
    theta_error = theta - theta_offset
    print(f"ID:{marker[0]} x_err:{x_error:.3f} y_err:{y_error:.3f} θ_err:{theta_error:.1f}° "
          f"[θ_L={theta_threshold_left}° θ_R={theta_threshold_right}°]")

    if step == 1:
        # L1: 后退 —— 仅在角度偏差不极端时执行（否则先转向再后退）
        if (x_error < x_threshold - back_threshold_offset and abs(theta_error) <= theta_hard_limit):
            print("后退", x_error, " < ", x_threshold - back_threshold_offset)
            Box_Back(1)
        # L2: 大角度转向 —— theta_hard_limit 独立判断
        elif (theta_error > theta_hard_limit):
            print("1左转身（大角度）θ_err", theta_error, "> hard_limit", theta_hard_limit)
            BoxL_turn2(1)
        elif (theta_error < -theta_hard_limit):
            print("1右转身（大角度）θ_err", theta_error, "< -hard_limit", theta_hard_limit)
            BoxR_turn2(1)
        # L3: 快速逼近 —— 先靠近再对正角度
        elif (x_error > x_threshold + fast_approach_offset):
            print("向前靠近标签（快速）x_err", x_error, ">", x_threshold + fast_approach_offset)
            box_go2(1)
        # L4: 方向对正 —— 靠近后再精调角度（左右不对称容忍度）
        elif (theta_error > theta_threshold_left):
            print("2左转（精调）θ_err", theta_error, "> θ_L", theta_threshold_left)
            BoxL_turn1(1)
        elif (theta_error < -theta_threshold_right):
            print("2右转（精调）θ_err", theta_error, "< -θ_R", theta_threshold_right)
            BoxR_turn1(1)
        # L5: 粗调平移
        elif (y_error > y_threshold + coarse_y_offset):
            print("1左移动（粗调）y_err", y_error, ">", y_threshold + coarse_y_offset)
            BoxL_move2(1)
        elif (y_error < -y_threshold - coarse_y_offset):
            print("1右移动（粗调）y_err", y_error, "< -", y_threshold + coarse_y_offset)
            BoxR_move2(1)
        # L6: 精调平移
        elif (y_error > y_threshold):
            print("1左移动（精调）y_err", y_error, ">", y_threshold)
            BoxL_move1(1)
        elif (y_error < -y_threshold):
            print("1右移动（精调）y_err", y_error, "< -", y_threshold)
            BoxR_move1(1)
        # L7: 慢速逼近
        elif (x_error > x_threshold + slow_approach_offset):
            print("向前靠近标签（中速）x_err", x_error, ">", x_threshold + slow_approach_offset)
            box_go1(1)
        # L8: 精调逼近
        elif (x_error > x_threshold + fine_approach_offset):
            print("向前靠近标签（精调）x_err", x_error, ">", x_threshold + fine_approach_offset)
            box_go(1)
        # L9: 已对正
        else:
            is_turn_done = True

    elif step == 2:
        # L2: 大角度转向
        if (theta_error > theta_hard_limit):
            print("1左转身（大角度）θ_err", theta_error, "> hard_limit", theta_hard_limit)
            L_turn2(1)
        elif (theta_error < -theta_hard_limit):
            print("1右转身（大角度）θ_err", theta_error, "< -hard_limit", theta_hard_limit)
            R_turn2(1)
        # L3: 快速逼近
        elif (x_error > x_threshold + fast_approach_offset):
            print("向前靠近标签（快速）x_err", x_error, ">", x_threshold + fast_approach_offset)
            go_fast2(1)
        # L4: 方向对正 —— 左右不对称容忍度
        elif (theta_error > theta_threshold_left):
            print("2左转（精调）θ_err", theta_error, "> θ_L", theta_threshold_left)
            L_turn1(1)
        elif (theta_error < -theta_threshold_right):
            print("2右转（精调）θ_err", theta_error, "< -θ_R", theta_threshold_right)
            R_turn1(1)
        # L5: 粗调平移
        elif (y_error > y_threshold + coarse_y_offset):
            print("1左移动（粗调）y_err", y_error, ">", y_threshold + coarse_y_offset)
            L_move2(1)
        elif (y_error < -y_threshold - coarse_y_offset):
            print("1右移动（粗调）y_err", y_error, "< -", y_threshold + coarse_y_offset)
            R_move2(1)
        # L6: 精调平移
        elif (y_error > y_threshold):
            print("1左移动（精调）y_err", y_error, ">", y_threshold)
            L_move1(1)
        elif (y_error < -y_threshold):
            print("1右移动（精调）y_err", y_error, "< -", y_threshold)
            R_move1(1)
        # L7: 慢速逼近
        elif (x_error > x_threshold + slow_approach_offset):
            print("向前靠近标签（中速）x_err", x_error, ">", x_threshold + slow_approach_offset)
            go_fast1(1)
        # L8: 精调逼近
        elif (x_error > x_threshold + fine_approach_offset):
            print("向前靠近标签（精调）x_err", x_error, ">", x_threshold + fine_approach_offset)
            go_fast(1)
        else:
            is_turn_done = True

    return is_turn_done


# ============================================================================
# 第十一部分: 路径点查找
# ============================================================================

def find_waypoint(tag_id, step_key):
    """在配置中查找指定 tag_id 在当前步骤下的路径点"""
    waypoints_list = cfg('waypoints', step_key, default=[])
    for w in waypoints_list:
        if w.get('tag_id') == tag_id:
            return w
    return None


# ============================================================================
# 第十二部分: 主程序入口 —— 状态机循环
# ============================================================================

if __name__ == '__main__':
    load_config()

    rospy.init_node('image_listener')

    Tag = TagConverter(
        ar_topic=cfg('ar_tags', 'topic', default='/chest/ar_pose_marker'),
        min_id=cfg('ar_tags', 'min_id_threshold', default=15),
        scan_iterations=cfg('ar_tags', 'scan_iterations', default=20),
        scan_delay=cfg('ar_tags', 'scan_delay_sec', default=0.01),
        min_valid_id=cfg('ar_tags', 'min_valid_id', default=1)
    )

    time.sleep(cfg('timing', 'init_node_delay_sec', default=0.5))

    # 状态变量: ID(目标标签编号), step(1=去程/2=返程), level(子状态)
    ID = 0
    step = 1
    level = "start_box"
    _last_unknown_tag = None  # 日志限流
    _no_tag_count = 0            # 连续未检测到目标标签的计数
    _no_box_count = 0            # 连续未检测到方块的计数
    _approach_forward_count = 0  # 本次抓取中前进的步数（用于搜索模式交替）

    time.sleep(cfg('timing', 'startup_wait_sec', default=5.0))

    while ChestOrg is None:
        print('等待图像...')
        time.sleep(cfg('timing', 'camera_poll_interval_sec', default=0.1))

    print('启动')

    init_act = cfg('initial_action')
    dispatch_action(init_act.get('action', 'go_fast2'), init_act.get('repeat', 1))

    # ========== 主控制循环 ==========
    while not rospy.is_shutdown():

        # ----- 阶段一: 抓箱子 (ID == 0) -----
        if ID == 0:
            if level == "start_box":
                find_box(Chest_img)
                goto_box()
                if chest_circle_x is None:
                    _no_box_count += 1
                    if _no_box_count >= 5:
                        # 身体左转搜索方块
                        dispatch_action('L_turn2', 1)
                        print(f"找方块 左转搜索({_no_box_count})")
                else:
                    _no_box_count = 0
                time.sleep(cfg('timing', 'box_loop_delay_sec', default=0.1))
            elif level == "end_box":
                # 抓取后方块同方向后退多余步数（如前进8步→退3步→净前进5步）
                max_steps = cfg('box_detection', 'max_approach_steps', default=5)
                if _approach_forward_count > max_steps:
                    excess = _approach_forward_count - max_steps
                    print(f"同方向后退 {excess} 步 (前进{_approach_forward_count}-上限{max_steps})")
                    dispatch_action('Box_Back', excess)
                _approach_forward_count = 0
                seq = cfg('box_transition', f'step{step}', default=[])
                run_action_sequence(seq)
                if step == 2:
                    step = 1
                ID += 1

        # ----- 阶段二: AR 标签导航 (ID > 0) -----
        else:
            marker = Tag.get_nearest_marker()

            # 判断是否需要执行兜底搜索
            # 仅当完全无标签 或 标签不在当前步骤路径点中时触发搜索
            need_fallback = False
            if len(marker) == 0:
                need_fallback = True
            else:
                wp = find_waypoint(marker[0], f'step{step}')
                if wp is None:
                    need_fallback = True
                    if marker[0] != _last_unknown_tag:
                        print(f"标签 {marker[0]} 在步骤 {step} 中无路径点配置，执行搜索")
                        _last_unknown_tag = marker[0]

            if need_fallback:
                # 搜索模式: 兜底动作 + 左右转向交替，避免一直后退
                # 顺序: 兜底 → 右转 → 左转 → 兜底 → ...
                _no_tag_count += 1
                cycle = _no_tag_count % 3
                if cycle == 0:
                    # 兜底动作（按状态选择）
                    fb = cfg('no_marker_fallback')
                    if ID == 1 and level == "end_box":
                        dispatch_action('BoxR_turn2', 1)
                    elif (ID == 1 and level == "start_moving") or ID == 2 or ID == 3 or ID == 4 or (ID == 5 and step == 1):
                        dispatch_action('Box_Back', 1)
                    elif ID == 5 and step == 2 and level == "start_moving":
                        dispatch_action('R_turn2', 1)
                    elif ID == 6 or ID == 7 or (ID == 5 and step == 2 and level == "reverse_moving"):
                        dispatch_action('Back2', 1)
                    else:
                        dispatch_action('Back2', 1)
                    print(f"无目标 搜索({_no_tag_count}): 兜底")
                elif cycle == 1:
                    act = 'BoxR_turn2' if step == 1 else 'R_turn2'
                    dispatch_action(act, 1)
                    print(f"无目标 搜索({_no_tag_count}): {act}")
                else:
                    act = 'BoxL_turn2' if step == 1 else 'L_turn2'
                    dispatch_action(act, 1)
                    print(f"无目标 搜索({_no_tag_count}): {act}")

            # 检测到正确标签 → 对正导航
            elif len(marker) > 0:
                _no_tag_count = 0  # 找到标签，重置搜索计数
                _last_unknown_tag = None
                robot_tag_x = marker[1]
                robot_tag_y = marker[2]
                tag_yaw = marker[3] + cfg('tag_alignment', 'yaw_offset_deg', default=90)

                wp = find_waypoint(marker[0], f'step{step}')
                if ID == wp['tag_id'] or wp.get('match_any', False):
                    # 正确标签（或 match_any 路径点）: 设置 level 后执行对正
                    # match_any: step2 标签1 不检查 ID，只要看到就无条件触发（匹配原始行为）
                    if 'set_level' in wp:
                        level = wp['set_level']
                    ta_defaults = cfg('tag_alignment', 'defaults')
                    # 正负角度容忍度: wp 中可分别指定 theta_threshold_left/right
                    # 若未指定则退化为对称的 theta_threshold，再退化为全局默认
                    global_theta = ta_defaults.get('theta_threshold', 5)
                    theta_L = wp.get('theta_threshold_left',
                              wp.get('theta_threshold', global_theta))
                    theta_R = wp.get('theta_threshold_right',
                              wp.get('theta_threshold', global_theta))
                    result = turn_to_tag(
                        robot_tag_x, robot_tag_y, tag_yaw,
                        x_offset=wp.get('x_offset', 0),
                        y_offset=wp.get('y_offset', 0),
                        theta_offset=wp.get('theta_offset', 0),
                        x_threshold=wp.get('x_threshold', ta_defaults.get('x_threshold', 0.03)),
                        y_threshold=wp.get('y_threshold', ta_defaults.get('y_threshold', 0.02)),
                        theta_threshold_left=theta_L,
                        theta_threshold_right=theta_R
                    )
                    if result:
                        print(f'{wp["tag_id"]}号码对正完毕')
                        run_action_sequence(wp.get('on_aligned', []))
                        # 状态转换逻辑（与原始行为一致）:
                        #   transition_to_step: 切换步骤但不递增 ID，同一标签用新步骤重新对正
                        #   reset_mission:      重置任务回到抓箱子阶段
                        #   其他情况:            正常递增 ID 进入下一个标签
                        if 'transition_to_step' in wp:
                            step = wp['transition_to_step']
                            # 不递增 ID —— 保持当前 ID，下一步循环会用新 step 重新对正同一标签
                            # 例如: 标签5 step1→step2, ID保持5, 下次对正标签5时用step2参数(theta_offset=180)
                        elif wp.get('reset_mission', False):
                            ID = 0
                            level = "start_box"
                            _no_tag_count = 0
                        else:
                            ID += 1
                else:
                    # 非目标标签 → 搜索序列
                    run_action_sequence(wp.get('on_other_tag', []))

        time.sleep(cfg('timing', 'main_loop_delay_sec', default=0.1))
