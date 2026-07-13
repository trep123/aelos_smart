# -*- coding: utf-8 -*-
"""
=============================================================================
动作模块 (actions.py)
=============================================================================
封装全部 29 个机器人动作函数 + 注册表 + 字符串调度系统。
每个动作函数调用 base_action.action() 后等待配置的稳定时间。
通过 ACTION_REGISTRY 字典可按字符串名动态调度，实现配置驱动。
=============================================================================
"""

import time
import sys
from config_loader import cfg

# --- 导入 leju 动作库 ---
sys.path.append(cfg('system', 'ros_workspace_path',
                    default="/home/lemon/catkin_ws/src/aelos_smart_ros"))
from leju import base_action


def _sleep_for(func_name):
    """查询指定动作函数的执行后等待时间（秒）"""
    return cfg('actions', 'sleep_times', func_name, default=0.5)


# ===================================================================
# 放下箱子 / 后退类
# ===================================================================

def Box_Down(n):
    """放下箱子"""
    for i in range(0, n):
        base_action.action("PutCubeDown")
        time.sleep(_sleep_for('Box_Down'))

def Box_Back(n):
    """抱箱子后退"""
    for i in range(0, n):
        base_action.action("BoxBack1Run")
        time.sleep(_sleep_for('Box_Back'))

def Box_Back1(n):
    """抱箱子后退（变体）"""
    for i in range(0, n):
        base_action.action("BoxBack2-1")
        time.sleep(_sleep_for('Box_Back1'))

def Back2(n):
    """空手后退两步"""
    for i in range(0, n):
        base_action.action("Back2Run")
        time.sleep(_sleep_for('Back2'))

def Back1(n):
    """空手后退一步"""
    for i in range(0, n):
        base_action.action("Back1Run")
        time.sleep(_sleep_for('Back1'))

# ===================================================================
# 前进类
# ===================================================================

def go_fast(n):
    for i in range(0, n):
        base_action.action("Forwalk01")
        time.sleep(_sleep_for('go_fast'))

def go_fast1(n):
    for i in range(0, n):
        base_action.action("FastForward1s")
        time.sleep(_sleep_for('go_fast1'))

def go_fast2(n):
    for i in range(0, n):
        base_action.action("FastForward2s")
        time.sleep(_sleep_for('go_fast2'))

def go_fast3(n):
    for i in range(0, n):
        base_action.action("FastForward3s")
        time.sleep(_sleep_for('go_fast3'))

def box_go(n):
    for i in range(0, n):
        base_action.action("BoxForward02")
        time.sleep(_sleep_for('box_go'))

def box_go1(n):
    for i in range(0, n):
        base_action.action("BoxForward1s")
        time.sleep(_sleep_for('box_go1'))

def box_go2(n):
    for i in range(0, n):
        base_action.action("BoxForward2s")
        time.sleep(_sleep_for('box_go2'))

def box_go3(n):
    for i in range(0, n):
        base_action.action("BoxForward3s")
        time.sleep(_sleep_for('box_go3'))

# ===================================================================
# 侧移类
# ===================================================================

def L_move1(n):
    for i in range(0, n):
        base_action.action("Left02move")
        print('左移1.5cm')
        time.sleep(_sleep_for('L_move1'))

def L_move2(n):
    for i in range(0, n):
        base_action.action('move_left')
        time.sleep(_sleep_for('L_move2'))

def BoxL_move1(n):
    for i in range(0, n):
        base_action.action("BoxLeft1")
        time.sleep(_sleep_for('BoxL_move1'))

def BoxL_move2(n):
    for i in range(0, n):
        base_action.action('Box_move_left')
        time.sleep(_sleep_for('BoxL_move2'))

def R_move1(n):
    for i in range(0, n):
        base_action.action("Right02move")
        time.sleep(_sleep_for('R_move1'))

def R_move2(n):
    for i in range(0, n):
        base_action.action('move_right')
        time.sleep(_sleep_for('R_move2'))

def BoxR_move1(n):
    for i in range(0, n):
        base_action.action("BoxRight1")
        time.sleep(_sleep_for('BoxR_move1'))

def BoxR_move2(n):
    for i in range(0, n):
        base_action.action('Box_move_right')
        time.sleep(_sleep_for('BoxR_move2'))

# ===================================================================
# 转向类
# ===================================================================

def L_turn1(n):
    for i in range(0, n):
        base_action.action("turn003L")
        time.sleep(_sleep_for('L_turn1'))

def L_turn2(n):
    for i in range(0, n):
        base_action.action("LeftTurn1s")
        time.sleep(_sleep_for('L_turn2'))

def BoxL_turn1(n):
    for i in range(0, n):
        base_action.action("BoxTurnL1")
        time.sleep(_sleep_for('BoxL_turn1'))

def BoxL_turn2(n):
    for i in range(0, n):
        base_action.action("BoxLeftTurn1s")
        time.sleep(_sleep_for('BoxL_turn2'))

def R_turn1(n):
    for i in range(0, n):
        base_action.action("turn003R")
        time.sleep(_sleep_for('R_turn1'))

def R_turn2(n):
    for i in range(0, n):
        base_action.action("RightTurn1s")
        time.sleep(_sleep_for('R_turn2'))

def BoxR_turn1(n):
    for i in range(0, n):
        base_action.action("BoxTurnR1")
        time.sleep(_sleep_for('BoxR_turn1'))

def BoxR_turn2(n):
    for i in range(0, n):
        base_action.action("BoxRightTurn1s")
        time.sleep(_sleep_for('BoxR_turn2'))


# ===================================================================
# 动作注册表与调度
# ===================================================================

ACTION_REGISTRY = {
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
    """按名称字符串调用动作函数"""
    func = ACTION_REGISTRY.get(name)
    if func is None:
        print(f"警告: 未知动作 '{name}'")
        return
    func(repeat)


def run_action_sequence(sequence):
    """依次执行动作序列 [{"action":"name","repeat":N}, ...]"""
    for item in sequence:
        dispatch_action(item['action'], item['repeat'])
