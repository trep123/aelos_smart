# -*- coding: utf-8 -*-
"""
=============================================================================
YOLO 检测模块 (yolo_detector.py)
=============================================================================
封装 YOLO 模型推理，提供方块和 ARTag 的检测接口。
支持 ultralytics YOLO (PyTorch .pt) 和 ONNX Runtime (.onnx)。
=============================================================================
"""

import time
import numpy as np
from config_loader import cfg

# --- 延迟加载 YOLO 模型（首次调用时加载，避免启动耗时） ---
_model = None
_model_type = None


def _load_model():
    """加载 YOLO 模型（单例）"""
    global _model, _model_type
    if _model is not None:
        return

    model_name = cfg('yolo', 'model_name', default='best')
    # 模型文件路径: models/<model_name>.pt（基于项目根目录）
    import os as _os
    root_dir = _os.path.dirname(_os.path.abspath(__file__))
    model_path = _os.path.join(root_dir, 'models', f'{model_name}.pt')
    backend = cfg('yolo', 'backend', default='ultralytics')

    if backend == 'ultralytics':
        try:
            from ultralytics import YOLO
            _model = YOLO(model_path)
            _model_type = 'ultralytics'
            print(f"YOLO 模型已加载: {model_path} (ultralytics)")
        except ImportError:
            raise ImportError("请安装 ultralytics: pip install ultralytics")
    elif backend == 'onnx':
        try:
            import onnxruntime as ort
            _model = ort.InferenceSession(model_path)
            _model_type = 'onnx'
            print(f"YOLO 模型已加载: {model_path} (onnx)")
        except ImportError:
            raise ImportError("请安装 onnxruntime: pip install onnxruntime")
    else:
        raise ValueError(f"不支持的 YOLO 后端: {backend}")


def _onnx_preprocess(img, input_size=(640, 640)):
    """ONNX 预处理：resize + normalize"""
    import cv2
    img_resized = cv2.resize(img, input_size)
    img_rgb = cv2.cvtColor(img_resized, cv2.COLOR_BGR2RGB)
    img_norm = img_rgb.astype(np.float32) / 255.0
    img_transposed = np.transpose(img_norm, (2, 0, 1))
    return np.expand_dims(img_transposed, axis=0)


def detect(img):
    """
    对图像执行 YOLO 推理，返回检测结果列表。

    参数:
        img: numpy.ndarray (BGR 格式, 与 OpenCV 一致)

    返回值:
        list[dict]: 每个检测结果包含:
            - 'class': str   — 类别名 ('green_square', 'orange_square', 'artag')
            - 'conf':  float — 置信度 (0~1)
            - 'x':     float — 边界框中心 x (像素)
            - 'y':     float — 边界框中心 y (像素)
            - 'w':     float — 边界框宽度 (像素)
            - 'h':     float — 边界框高度 (像素)
            - 'area':  float — 边界框面积 (w*h, 像素²)
    """
    _load_model()
    conf_threshold = cfg('yolo', 'conf_threshold', default=0.3)

    if _model_type == 'ultralytics':
        results = _model(img, verbose=False)
        detections = []
        if results and len(results) > 0:
            for box in results[0].boxes:
                conf = float(box.conf[0])
                if conf < conf_threshold:
                    continue
                cls_id = int(box.cls[0])
                cls_name = results[0].names.get(cls_id, str(cls_id))
                x1, y1, x2, y2 = box.xyxy[0].tolist()
                cx, cy = (x1 + x2) / 2, (y1 + y2) / 2
                w, h = x2 - x1, y2 - y1
                detections.append({
                    'class': cls_name,
                    'conf':  conf,
                    'x':     cx,
                    'y':     cy,
                    'w':     w,
                    'h':     h,
                    'area':  w * h,
                })
        return detections

    elif _model_type == 'onnx':
        import cv2
        input_data = _onnx_preprocess(img)
        input_name = _model.get_inputs()[0].name
        outputs = _model.run(None, {input_name: input_data.astype(np.float32)})
        # ONNX YOLO output parsing (simplified — assumes standard YOLOv8 output format)
        detections = _parse_onnx_output(outputs, img.shape, conf_threshold)
        return detections

    return []


def _parse_onnx_output(outputs, img_shape, conf_threshold):
    """解析 ONNX YOLO 输出（YOLOv8 格式: [batch, 84, 8400]）"""
    class_names = cfg('yolo', 'class_names', default=['green_square', 'orange_square', 'artag'])
    output = outputs[0]  # shape: (1, 84, 8400)
    output = np.transpose(output[0], (1, 0))  # (8400, 84)

    img_h, img_w = img_shape[:2]
    detections = []

    for detection in output:
        scores = detection[4:]
        class_id = np.argmax(scores)
        confidence = scores[class_id]
        if confidence < conf_threshold:
            continue
        if class_id >= len(class_names):
            continue

        cx, cy, w, h = detection[:4]
        cx = (cx / 640.0) * img_w
        cy = (cy / 640.0) * img_h
        w = (w / 640.0) * img_w
        h = (h / 640.0) * img_h

        detections.append({
            'class': class_names[class_id],
            'conf':  float(confidence),
            'x':     float(cx),
            'y':     float(cy),
            'w':     float(w),
            'h':     float(h),
            'area':  float(w * h),
        })

    return detections


def detect_boxes(img):
    """
    检测方块（green_square, orange_square）。
    按 config.box_priority.color_order 映射 YOLO 类别名，
    返回优先级最高且置信度最高的方块，或 None。
    """
    all_dets = detect(img)
    color_order = cfg('box_priority', 'color_order', default=['green', 'orange'])
    # 类别名映射: config 颜色 → YOLO 类别
    class_map = cfg('yolo', 'box_class_map',
                    default={'green': 'green_square', 'orange': 'orange_square'})

    for color in color_order:
        yolo_class = class_map.get(color)
        if not yolo_class:
            continue
        # 收集该颜色的所有检测
        matches = [d for d in all_dets if d['class'] == yolo_class]
        if matches:
            # 返回面积最大的（距离最近）
            return max(matches, key=lambda d: d['area'])
    return None


def detect_artag(img):
    """
    检测 ARTag。
    返回置信度最高的 artag 检测结果，或 None。
    """
    all_dets = detect(img)
    matches = [d for d in all_dets if d['class'] == 'artag']
    if matches:
        return max(matches, key=lambda d: d['conf'])
    return None
