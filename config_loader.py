# -*- coding: utf-8 -*-
"""
=============================================================================
配置加载模块 (config_loader.py)
=============================================================================
提供 JSON 配置文件加载与逐级安全访问。
支持 // 行内注释的 JSON 格式。
若文件缺失或格式错误，自动回退到内置默认值。
=============================================================================
"""

import json
import os
import re

_CONFIG = None
_CONFIG_PATH = None


def _build_default_config():
    """内置默认配置，与原始硬编码参数完全一致。"""
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
            "orange": {"hsv_lower": [0, 107, 122], "hsv_upper": [19, 255, 255]}
        },
        "box_priority": {"color_order": ["green", "orange"]},
        "yolo": {
            "model_path": "best.pt",
            "backend": "ultralytics",
            "conf_threshold": 0.3,
            "box_class_map": {"green": "green_square", "orange": "orange_square"},
            "artag_class": "artag",
            "tag_approach_scale": 0.5
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
    """加载 JSON 配置文件（单次加载 + 缓存）。支持 // 行内注释。"""
    global _CONFIG, _CONFIG_PATH
    if _CONFIG is not None:
        return _CONFIG
    if config_path is None:
        config_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'config.json')
    _CONFIG_PATH = config_path
    try:
        with open(config_path, 'r', encoding='utf-8') as f:
            raw_text = f.read()
        # 去除 // 行内注释
        lines = [re.sub(r'//.*$', '', line) for line in raw_text.split('\n')]
        _CONFIG = json.loads('\n'.join(lines))
        print(f"已加载配置文件: {config_path}")
    except FileNotFoundError:
        print(f"警告: 配置文件不存在 ({config_path})，使用内置默认配置")
        _CONFIG = _build_default_config()
    except json.JSONDecodeError as e:
        print(f"警告: 配置文件格式错误 ({e})，使用内置默认配置")
        _CONFIG = _build_default_config()
    return _CONFIG


def cfg(*keys, default=None):
    """逐级安全访问嵌套配置字典。cfg('a','b','c') → CONFIG['a']['b']['c']"""
    d = load_config()
    for k in keys:
        if isinstance(d, dict):
            d = d.get(k)
        else:
            return default
    return d if d is not None else default
