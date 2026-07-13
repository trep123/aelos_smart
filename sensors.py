# -*- coding: utf-8 -*-
"""
=============================================================================
传感器模块 (sensors.py)
=============================================================================
封装图像采集后台线程和 AR 标签检测器。
RobotSensors 类提供线程安全的图像帧读取和标签查询接口。
=============================================================================
"""

import time
import threading
from config_loader import cfg
from image_Tag_converter import ImgConverter, TagConverter


class RobotSensors:
    """机器人传感器聚合类 —— 图像 + AR 标签"""

    def __init__(self):
        # 图像采集
        self._chest_img = None
        self._chest_org = None
        self._img_reader = ImgConverter(
            camera_topic=cfg('camera', 'topic', default='/usb_cam_chest/image_raw')
        )
        # AR 标签检测
        self._tag = TagConverter(
            ar_topic=cfg('ar_tags', 'topic', default='/chest/ar_pose_marker'),
            min_id=cfg('ar_tags', 'min_id_threshold', default=15),
            scan_iterations=cfg('ar_tags', 'scan_iterations', default=20),
            scan_delay=cfg('ar_tags', 'scan_delay_sec', default=0.01),
            min_valid_id=cfg('ar_tags', 'min_valid_id', default=1)
        )
        # 后台图像采集线程
        self._thread = threading.Thread(target=self._run, daemon=True)
        self._running = False

    def start(self):
        """启动后台图像采集线程"""
        self._running = True
        self._thread.start()

    def _run(self):
        """后台线程：持续轮询摄像头图像"""
        while self._running:
            ret, org = self._img_reader.chest_image()
            time.sleep(cfg('camera', 'image_fetch_interval_sec', default=0.3))
            if org is not None:
                self._chest_img = org
                self._chest_org = org
                time.sleep(cfg('camera', 'image_acquire_delay_sec', default=0.05))
            else:
                time.sleep(cfg('camera', 'image_retry_delay_sec', default=0.3))
                print("暂未获取到图像")

    @property
    def chest_img(self):
        """当前摄像头图像帧（numpy.ndarray 或 None）"""
        return self._chest_img

    @property
    def chest_org(self):
        """原始图像引用"""
        return self._chest_org

    def get_nearest_marker(self):
        """获取视野内 ID 最小的 AR 标签"""
        return self._tag.get_nearest_marker()
