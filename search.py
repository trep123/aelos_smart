# -*- coding: utf-8 -*-
"""
=============================================================================
搜索模式模块 (search.py)
=============================================================================
方块搜索: 连续未找到方块时左转搜索
标签搜索: 兜底→右转→左转交替，扩大搜索范围
=============================================================================
"""

from actions import dispatch_action


def box_search(state):
    """
    方块搜索模式：连续 5 次未找到方块后左转搜索。
    找到方块后自动清零计数（由调用方处理）。
    """
    state.no_box_count += 1
    if state.no_box_count >= 5:
        dispatch_action('L_turn2', 1)
        print(f"找方块 左转搜索({state.no_box_count})")


def tag_search(state):
    """
    标签搜索模式：兜底→右转→左转三轮循环。
    找到标签后由调用方清零计数。
    """
    state.no_tag_count += 1
    cycle = state.no_tag_count % 3

    if cycle == 0:
        # 兜底动作：按状态选择
        if state.ID == 1 and state.level == "end_box":
            dispatch_action('BoxR_turn2', 1)
        elif (state.ID == 1 and state.level == "start_moving") or \
             state.ID in (2, 3, 4) or (state.ID == 5 and state.step == 1):
            dispatch_action('Box_Back', 1)
        elif state.ID == 5 and state.step == 2 and state.level == "start_moving":
            dispatch_action('R_turn2', 1)
        elif state.ID in (6, 7) or (state.ID == 5 and state.step == 2 and state.level == "reverse_moving"):
            dispatch_action('Back2', 1)
        else:
            dispatch_action('Back2', 1)
        print(f"无目标 搜索({state.no_tag_count}): 兜底")
    elif cycle == 1:
        act = 'BoxR_turn2' if state.step == 1 else 'R_turn2'
        dispatch_action(act, 1)
        print(f"无目标 搜索({state.no_tag_count}): {act}")
    else:
        act = 'BoxL_turn2' if state.step == 1 else 'L_turn2'
        dispatch_action(act, 1)
        print(f"无目标 搜索({state.no_tag_count}): {act}")
