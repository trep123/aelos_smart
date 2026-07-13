# -*- coding: utf-8 -*-
"""
=============================================================================
箱子检测与抓取模块 (box_detector.py)
=============================================================================
find_box:   HSV 多颜色优先级分割，选取面积最大的方块
goto_box:   根据像素坐标调整机器人位姿，先 x 后 y，到位后抓取
=============================================================================
"""

import time
import cv2
import numpy as np
import math
from config_loader import cfg
from leju import base_action


# --- 颜色范围缓存（首次调用时加载） ---
_color_range = None
_debug = None


def _init_color_range():
    global _color_range, _debug
    if _color_range is not None:
        return
    _debug = cfg('system', 'debug', default=False)
    _color_range = {}
    for cname in ['green', 'yellow', 'orange']:
        lower = cfg('colors', cname, 'hsv_lower')
        upper = cfg('colors', cname, 'hsv_upper')
        if lower and upper:
            _color_range[cname] = (tuple(lower), tuple(upper))


def find_box(img, state):
    """
    多颜色优先级箱子检测。
    按 config.box_priority.color_order 顺序扫描每种颜色，
    同颜色选面积最大的方块（面积∝距离），高优先级找到即返回。
    """
    global _color_range
    _init_color_range()

    state.box_color_selected = None

    if state.chest_img is None:
        print('等待获取图像中...')
        time.sleep(cfg('camera', 'image_retry_delay_sec', default=0.3))
        return

    box_img_bgr = cv2.cvtColor(img, cv2.COLOR_RGB2BGR)
    box_img_hsv = cv2.cvtColor(box_img_bgr, cv2.COLOR_BGR2HSV)
    blurred = cv2.GaussianBlur(
        box_img_hsv,
        tuple(cfg('image_processing', 'gaussian_blur', 'kernel_size', default=[3, 3])), 0
    )

    erode_iters = cfg('image_processing', 'erosion', 'iterations', default=2)
    dilate_kernel = tuple(cfg('image_processing', 'dilation', 'kernel_size', default=[4, 4]))
    dilate_iters = cfg('image_processing', 'dilation', 'iterations', default=2)
    min_area = cfg('image_processing', 'min_contour_area', default=200)
    color_order = cfg('box_priority', 'color_order', default=['green', 'yellow'])

    for cname in color_order:
        if cname not in _color_range:
            continue
        lower, upper = _color_range[cname]
        mask = cv2.inRange(blurred, lower, upper)
        eroded = cv2.erode(mask, None, iterations=erode_iters)
        opened = cv2.dilate(eroded, np.ones(dilate_kernel, np.uint8), iterations=dilate_iters)
        contours, _ = cv2.findContours(opened, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)

        if len(contours) == 0:
            continue

        areas = [math.fabs(cv2.contourArea(cn)) for cn in contours]
        max_idx = np.argmax(areas)
        if areas[max_idx] < min_area:
            continue

        (state.chest_circle_x, state.chest_circle_y), radius = cv2.minEnclosingCircle(contours[max_idx])
        state.box_color_selected = cname
        cv2.circle(img, (int(state.chest_circle_x), int(state.chest_circle_y)),
                   int(radius), (0, 0, 255))
        print(f'[{cname}] x={state.chest_circle_x:.0f} y={state.chest_circle_y:.0f} area={areas[max_idx]:.0f}')

        if _debug:
            cv2.imshow(cfg('system', 'debug_display_window', default='Box'), img)
            cv2.waitKey(cfg('system', 'debug_display_wait_ms', default=2000))
        return

    # 所有颜色均未找到
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
