# -*- coding: utf-8 -*-
"""
=============================================================================
箱子检测与抓取模块 (box_detector.py)
=============================================================================
find_box:   YOLO 检测方块（green_square / orange_square），替代 HSV 分割
goto_box:   根据像素坐标调整机器人位姿，先 x 后 y，到位后抓取
=============================================================================
"""

import time
import cv2
from config_loader import cfg
from leju import base_action
from yolo_detector import detect_boxes


def find_box(img, state):
    """
    YOLO 方块检测。
    按 config.box_priority.color_order 映射 YOLO 类别名，
    选优先级最高 + 面积最大（距离最近）的方块。
    """
    state.box_color_selected = None

    if state.chest_img is None:
        print('等待获取图像中...')
        time.sleep(cfg('camera', 'image_retry_delay_sec', default=0.3))
        return

    # 转 BGR（YOLO 通常期望 BGR 输入）
    bgr = cv2.cvtColor(img, cv2.COLOR_RGB2BGR)
    result = detect_boxes(bgr)

    if result:
        class_map_rev = {v: k for k, v in cfg('yolo', 'box_class_map',
            default={'green': 'green_square', 'orange': 'orange_square'}).items()}
        color = class_map_rev.get(result['class'], result['class'])

        state.chest_circle_x = result['x']
        state.chest_circle_y = result['y']
        state.box_color_selected = color
        print(f'[YOLO][{color}] x={result["x"]:.0f} y={result["y"]:.0f} '
              f'conf={result["conf"]:.2f} area={result["area"]:.0f}')
        return

    state.chest_circle_x = None
    state.chest_circle_y = None
    print('正在寻找目标')


def goto_box(state):
    """
    箱子逼近与抓取。
    优先级: x 左右对准 → y 前后对准 → 抓取。
    使用 config.box_detection 中的阈值和动作名。
    """
    t = cfg('box_detection', 'thresholds')
    act = cfg('box_detection', 'actions')
    action_sleep = cfg('box_detection', 'action_sleep_sec', default=0.5)
    no_coord_wait = cfg('box_detection', 'no_coordinate_wait_sec', default=0.3)
    grab_tol = cfg('box_detection', 'grab_tolerance', default=0)

    if state.chest_circle_x is None:
        print('等待获取坐标中...')
        time.sleep(no_coord_wait)
        return

    cx, cy = state.chest_circle_x, state.chest_circle_y

    if cx < t['x_left_large']:
        print("正在左侧移（大步）", cx)
        base_action.action(act['left_large'])
        time.sleep(action_sleep)
    elif cx < t['x_left_small']:
        print("正在左侧移（小步）", cx)
        base_action.action(act['left_small'])
        time.sleep(action_sleep)
    elif cx > t['x_right_large']:
        print("正在右侧移（大步）", cx)
        base_action.action(act['right_large'])
        time.sleep(action_sleep)
    elif cx > t['x_right_small']:
        print("正在右侧移（小步）", cx)
        base_action.action(act['right_small'])
        time.sleep(action_sleep)
    else:
        if cy < t['y_forward']:
            print("前进", cy)
            base_action.action(act['forward'])
            state.approach_forward_count += 1
            time.sleep(action_sleep)
        elif cy >= t['y_backward']:
            print("后退", cy)
            base_action.action(act['backward'])
            time.sleep(action_sleep)
        elif (t['x_left_small'] + grab_tol <= cx <= t['x_right_small'] - grab_tol and
              t['y_forward'] + grab_tol <= cy <= t['y_backward'] - grab_tol):
            print(f"开始抱箱子 [tol=±{grab_tol}px]")
            base_action.action(act['grab_approach'])
            base_action.action(act['grab'])
            base_action.action(act['lift'])
            state.level = "end_box"
        else:
            # 在移动区间和抓取区间之间的死区：保守前进一步
            if cy < t['y_forward'] + grab_tol:
                base_action.action(act['forward'])
                state.approach_forward_count += 1
                time.sleep(action_sleep)
