# -*- coding: utf-8 -*-
"""
=============================================================================
AR 标签导航模块 (tag_navigator.py)
=============================================================================
turn_to_tag:    9 级决策树多级逼近对正
find_waypoint:  根据 tag_id + step 在配置中查找路径点
=============================================================================
"""

from config_loader import cfg
from actions import Box_Back, BoxL_turn2, BoxR_turn2, BoxL_turn1, BoxR_turn1
from actions import box_go2, box_go1, box_go, BoxL_move2, BoxR_move2, BoxL_move1, BoxR_move1
from actions import L_turn2, R_turn2, L_turn1, R_turn1, L_move2, R_move2, L_move1, R_move1
from actions import go_fast2, go_fast1, go_fast


def turn_to_tag(dis_x, dis_y, theta, state,
                x_threshold=None, y_threshold=None,
                theta_threshold_left=None, theta_threshold_right=None):
    """
    AR 标签 9 级决策树多级逼近对正。
    step==1 使用抱箱子动作，step==2 使用空手动作。
    角度容忍度支持左右不对称配置。
    """
    defaults = cfg('tag_alignment', 'defaults')
    offsets = cfg('tag_alignment', 'offsets')

    # 阈值默认值
    if x_threshold is None:
        x_threshold = defaults.get('x_threshold', 0.03)
    if y_threshold is None:
        y_threshold = defaults.get('y_threshold', 0.02)
    if theta_threshold_left is None:
        theta_threshold_left = defaults.get('theta_threshold', 5)
    if theta_threshold_right is None:
        theta_threshold_right = defaults.get('theta_threshold', 5)

    # 内部偏移量
    back_offset = offsets.get('back_threshold', 0.03)
    hard_limit = offsets.get('theta_hard_limit', 35)
    coarse_y = offsets.get('coarse_y_offset', 0.05)
    fast_x = offsets.get('fast_approach_offset', 0.2)
    slow_x = offsets.get('slow_approach_offset', 0.12)
    fine_x = offsets.get('fine_approach_offset', 0.06)

    x_err = dis_x - state.get_waypoint('x_offset', 0)
    y_err = dis_y - state.get_waypoint('y_offset', 0)
    theta_err = theta - state.get_waypoint('theta_offset', 0)

    print(f"ID:{state.marker[0] if state.marker else '?'} x_err:{x_err:.3f} y_err:{y_err:.3f} "
          f"θ_err:{theta_err:.1f}° [θ_L={theta_threshold_left}° θ_R={theta_threshold_right}°]")

    step = state.step

    if step == 1:
        # L1: 后退（仅角度不极端时）
        if x_err < x_threshold - back_offset and abs(theta_err) <= hard_limit:
            print("后退", x_err, "<", x_threshold - back_offset)
            Box_Back(1)
        # L2: 大角度转向
        elif theta_err > hard_limit:
            print("1左转身（大角度）θ_err", theta_err, "> hard_limit", hard_limit)
            BoxL_turn2(1)
        elif theta_err < -hard_limit:
            print("1右转身（大角度）θ_err", theta_err, "< -hard_limit", hard_limit)
            BoxR_turn2(1)
        # L3: 快速逼近 —— 距离远时先靠近再对正角度
        elif x_err > x_threshold + fast_x:
            print("向前靠近标签（快速）x_err", x_err, ">", x_threshold + fast_x)
            box_go2(1)
        # L4: 方向对正 —— 靠近后再精调角度
        elif theta_err > theta_threshold_left:
            print("2左转（精调）θ_err", theta_err, "> θ_L", theta_threshold_left)
            BoxL_turn1(1)
        elif theta_err < -theta_threshold_right:
            print("2右转（精调）θ_err", theta_err, "< -θ_R", theta_threshold_right)
            BoxR_turn1(1)
        # L5: 粗调平移
        elif y_err > y_threshold + coarse_y:
            print("1左移动（粗调）y_err", y_err, ">", y_threshold + coarse_y)
            BoxL_move2(1)
        elif y_err < -y_threshold - coarse_y:
            print("1右移动（粗调）y_err", y_err, "< -", y_threshold + coarse_y)
            BoxR_move2(1)
        # L6: 精调平移
        elif y_err > y_threshold:
            print("1左移动（精调）y_err", y_err, ">", y_threshold)
            BoxL_move1(1)
        elif y_err < -y_threshold:
            print("1右移动（精调）y_err", y_err, "< -", y_threshold)
            BoxR_move1(1)
        # L7: 慢速逼近
        elif x_err > x_threshold + slow_x:
            print("向前靠近标签（中速）x_err", x_err, ">", x_threshold + slow_x)
            box_go1(1)
        # L8: 精调逼近
        elif x_err > x_threshold + fine_x:
            print("向前靠近标签（精调）x_err", x_err, ">", x_threshold + fine_x)
            box_go(1)
        else:
            return True

    elif step == 2:
        # L2: 大角度转向
        if theta_err > hard_limit:
            print("1左转身（大角度）θ_err", theta_err, "> hard_limit", hard_limit)
            L_turn2(1)
        elif theta_err < -hard_limit:
            print("1右转身（大角度）θ_err", theta_err, "< -hard_limit", hard_limit)
            R_turn2(1)
        # L3: 快速逼近 —— 距离远时先靠近再对正角度
        elif x_err > x_threshold + fast_x:
            print("向前靠近标签（快速）x_err", x_err, ">", x_threshold + fast_x)
            go_fast2(1)
        # L4: 方向对正 —— 靠近后再精调角度
        elif theta_err > theta_threshold_left:
            print("2左转（精调）θ_err", theta_err, "> θ_L", theta_threshold_left)
            L_turn1(1)
        elif theta_err < -theta_threshold_right:
            print("2右转（精调）θ_err", theta_err, "< -θ_R", theta_threshold_right)
            R_turn1(1)
        # L5: 粗调平移
        elif y_err > y_threshold + coarse_y:
            print("1左移动（粗调）y_err", y_err, ">", y_threshold + coarse_y)
            L_move2(1)
        elif y_err < -y_threshold - coarse_y:
            print("1右移动（粗调）y_err", y_err, "< -", y_threshold + coarse_y)
            R_move2(1)
        # L6: 精调平移
        elif y_err > y_threshold:
            print("1左移动（精调）y_err", y_err, ">", y_threshold)
            L_move1(1)
        elif y_err < -y_threshold:
            print("1右移动（精调）y_err", y_err, "< -", y_threshold)
            R_move1(1)
        # L7: 慢速逼近
        elif x_err > x_threshold + slow_x:
            print("向前靠近标签（中速）x_err", x_err, ">", x_threshold + slow_x)
            go_fast1(1)
        # L8: 精调逼近
        elif x_err > x_threshold + fine_x:
            print("向前靠近标签（精调）x_err", x_err, ">", x_threshold + fine_x)
            go_fast(1)
        else:
            return True

    return False


def find_waypoint(tag_id, step_key):
    """在配置中查找指定 tag_id 在当前步骤下的路径点"""
    waypoints_list = cfg('waypoints', step_key, default=[])
    for w in waypoints_list:
        if w.get('tag_id') == tag_id:
            return w
    return None


def get_thresholds_from_waypoint(wp):
    """从路径点配置中提取对正阈值（支持左右不对称和 per-tag 覆盖）"""
    global_def = cfg('tag_alignment', 'defaults')
    g_theta = global_def.get('theta_threshold', 5)
    return {
        'x_threshold': wp.get('x_threshold', global_def.get('x_threshold', 0.03)),
        'y_threshold': wp.get('y_threshold', global_def.get('y_threshold', 0.02)),
        'theta_L': wp.get('theta_threshold_left',
                   wp.get('theta_threshold', g_theta)),
        'theta_R': wp.get('theta_threshold_right',
                   wp.get('theta_threshold', g_theta)),
    }
