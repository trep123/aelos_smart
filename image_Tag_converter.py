#!/usr/bin/python
# -*- coding: utf-8 -*-
"""
=============================================================================
图像与 AR 标签转换模块 (image_Tag_converter.py)
=============================================================================

功能概述:
  本模块提供两个核心类，负责机器人视觉感知层的底层数据获取：
  1. ImgConverter   —— 订阅 ROS 摄像头图像话题，将 ROS Image 消息转换为
                       OpenCV 可处理的 numpy 数组格式（BGR8）。
  2. TagConverter   —— 订阅 AR 标签检测话题 (AlvarMarkers)，解析每个标签的
                       位姿信息（位置 x/y/z + 欧拉角 roll/pitch/yaw），并提供
                       查询"当前视野内 ID 最小的标签"的接口。

ROS 依赖:
  - sensor_msgs/Image            摄像头图像消息
  - ar_track_alvar_msgs/AlvarMarkers  AR 标签检测结果消息
  - cv_bridge                     ROS Image ↔ OpenCV 格式转换桥
  - tf.transformations            四元数 → 欧拉角转换

设计原则:
  - 所有可配置参数（话题名、扫描次数、延迟等）通过构造函数传入，
    默认值保留向后兼容，实际部署时由 config.json 统一配置。
  - 类的职责单一：ImgConverter 只管图像获取，TagConverter 只管标签检测。
  - get_nearest_marker() 采用"多次采样取最小 ID"策略，避免单帧漏检。
=============================================================================
"""

import time
import rospy
import tf
import math
from sensor_msgs.msg import Image
from ar_track_alvar_msgs.msg import AlvarMarkers
from cv_bridge import CvBridge, CvBridgeError
import numpy as np


# ============================================================================
# 类: ImgConverter —— 摄像头图像转换器
# ============================================================================

class ImgConverter():
    """
    摄像头图像转换器

    职责:
      订阅指定的 ROS Image 话题，在回调中将每帧图像从 ROS 消息格式
      转换为 OpenCV 的 BGR8 numpy 数组格式，供后续的 find_box() 等
      视觉处理函数使用。

    使用方式:
      reader = ImgConverter(camera_topic='/usb_cam_chest/image_raw')
      ret, img = reader.chest_image()  # 获取最新一帧图像
    """

    def __init__(self, camera_topic='/usb_cam_chest/image_raw'):
        """
        初始化图像订阅

        参数:
          camera_topic : str
            ROS 摄像头话题的完整路径。
            默认值 '/usb_cam_chest/image_raw' 保持向后兼容。
            实际部署时应从 config.json 的 camera.topic 字段传入。

        内部状态:
          self.bridge    : CvBridge 实例，负责 ROS Image ↔ OpenCV 格式桥接
          self.sub_chest : ROS Subscriber 对象，订阅指定话题
          self.img_chest : numpy.ndarray 或 None，存储最新一帧图像数据
        """
        # CvBridge 是单次实例化即可复用的转换器，无需每帧重建
        self.bridge = CvBridge()
        # 创建 ROS 订阅者：队列长度默认即可（取最新帧），回调为 self.cb_chest
        self.sub_chest = rospy.Subscriber(camera_topic, Image, self.cb_chest)
        self.img_chest = None  # 初始化为 None，表示尚未收到图像

    def cb_chest(self, msg):
        """
        摄像头话题回调函数（由 ROS 订阅线程自动调用）

        参数:
          msg : sensor_msgs.msg.Image
            ROS 标准图像消息，包含图像数据及元信息（编码格式、尺寸等）

        处理流程:
          1. 通过 CvBridge 将 ROS Image 消息解码为 OpenCV BGR8 格式
          2. 将解码后的 numpy 数组存入 self.img_chest
          3. 主线程通过 chest_image() 轮询获取此图像

        注意:
          - 此函数在 ROS 的回调线程中执行，不在主线程
          - 解码使用 "bgr8" 编码，与 find_box() 中的颜色空间转换兼容
          - 如果消息编码不是 bgr8，CvBridge 会自动转换（若无法转则抛异常）
        """
        cv2_img = self.bridge.imgmsg_to_cv2(msg, "bgr8")
        self.img_chest = cv2_img

    def chest_image(self):
        """
        获取最新一帧摄像头图像（主线程安全）

        返回值:
          (True, numpy.ndarray)   —— 正常情况，返回 (True, 图像数组)
          (True, None)            —— 尚未收到任何图像帧

        设计说明:
          返回元组 (ret, image) 的格式是为了与 cv2.VideoCapture.read() 保持
          一致的调用习惯（ret=True 表示成功，image 为图像数据）。
          实际上 ret 始终为 True 因为订阅不会"失败"，只是可能尚未收到帧。
        """
        return True, self.img_chest


# ============================================================================
# 类: TagConverter —— AR 标签检测器
# ============================================================================

class TagConverter():
    """
    AR 标签检测器

    职责:
      订阅 AR 标签检测结果话题，解析每个标签的 6-DOF 位姿（位置 + 朝向），
      并提供 get_nearest_marker() 方法获取当前视野内 ID 最小的标签。

    AR 标签坐标系说明:
      - AlvarMarkers 消息中每个 marker 包含:
          * marker.id          : 整数标签 ID（如 1, 2, 3...）
          * pose.pose.position : x, y, z 三维位置（米）
          * pose.pose.orientation : 四元数 (x, y, z, w) 表示朝向
      - 回调中通过 tf.transformations.euler_from_quaternion 将四元数
        转换为欧拉角（弧度），再转换为角度制便于后续计算。
      - 每个标签存储为列表 [id, pos.x, pos.y, yaw(度), 时间戳]

    使用方式:
      tag = TagConverter(ar_topic='/chest/ar_pose_marker')
      nearest = tag.get_nearest_marker()  # 返回最小 ID 标签或空列表
    """

    def __init__(self, ar_topic='/chest/ar_pose_marker',
                 min_id=15, scan_iterations=20, scan_delay=0.01,
                 min_valid_id=1):
        """
        初始化 AR 标签订阅

        参数:
          ar_topic : str
            AR 标签检测结果的 ROS 话题路径。
            默认值 '/chest/ar_pose_marker' 保持向后兼容。
            实际部署时应从 config.json 的 ar_tags.topic 字段传入。

          min_id : int
            最大标签 ID 哨兵值（必须大于所有实际使用的标签 ID）。
            初始化为此值，若扫描后仍为此值则表示"未检测到任何标签"。
            默认值 15 可覆盖 ID 1~14 的标签。

          scan_iterations : int
            get_nearest_marker() 中的帧累积次数。
            由于 AR 标签检测可能偶尔丢帧，通过多次采样累积标签数据
            可降低漏检概率。默认值 20 次。

          scan_delay : float
            每次采样之间的等待时间（秒）。
            默认值 0.01 秒 = 10ms。

          min_valid_id : int
            最小有效标签 ID。ID 小于此值的标签将被忽略（如场地上的
            干扰标签 ID=0）。默认值 1，只接受 ID≥1 的标签。

        内部状态:
          self.sub            : ROS Subscriber 对象
          self.markers        : 最近一帧回调收到的所有标签列表
          self._min_id        : 哨兵值（私有）
          self._scan_iterations : 扫描次数（私有）
          self._scan_delay    : 扫描间隔（私有）
          self._min_valid_id  : 最小有效标签 ID（私有）
        """
        # 创建 ROS 订阅者，接收 AlvarMarkers 消息
        self.sub = rospy.Subscriber(ar_topic, AlvarMarkers, self.sub_cb)
        self.markers = []           # 初始化为空列表
        self._min_id = min_id
        self._scan_iterations = scan_iterations
        self._scan_delay = scan_delay
        self._min_valid_id = min_valid_id

    def sub_cb(self, msg):
        """
        AR 标签话题回调函数（由 ROS 订阅线程自动调用）

        参数:
          msg : ar_track_alvar_msgs.msg.AlvarMarkers
            包含当前帧检测到的所有 AR 标签信息，每个标签含：
            - marker.id              : 标签 ID（整数）
            - marker.pose.pose       : 6-DOF 位姿（位置 + 四元数朝向）
            - msg.header.stamp.secs  : 时间戳（秒）

        处理流程:
          1. 遍历 msg.markers 中检测到的所有标签
          2. 对每个标签提取位置 (pos.x, pos.y) 和朝向四元数
          3. 使用 tf.transformations.euler_from_quaternion() 将四元数转为欧拉角
          4. 欧拉角由弧度制转为角度制（rpy[i] / pi * 180）
          5. 组装为 [id, x, y, yaw_deg, timestamp] 格式存入列表

        注意:
          - rpy[0] = roll, rpy[1] = pitch, rpy[2] = yaw（绕 Z 轴旋转）
          - 本代码只用 yaw（rpy_arc[2]），即标签在水平面内的朝向角
          - 四元数→欧拉角转换可能产生万向锁问题，但对于地面移动机器人，
            仅使用 yaw 角足够
          - 空列表检查 (len(rpy_arc) == 0) 理论上不会触发（固定长度为3），
            但保留作为防御性编程
        """
        markers_load = []  # 本帧标签列表（局部变量，避免并发读写 self.markers）
        time_sec = msg.header.stamp.secs  # 消息时间戳的秒部分
        for marker in msg.markers:
            # 提取位置信息
            pos = marker.pose.pose.position       # Point 类型: x, y, z
            quat = marker.pose.pose.orientation   # Quaternion 类型: x, y, z, w

            # 四元数 → 欧拉角（弧度制）
            # 注意: tf.transformations.euler_from_quaternion 返回 (roll, pitch, yaw)
            # 参数传入顺序为 [x, y, z, w]（与 ROS 四元数字段一致）
            rpy = tf.transformations.euler_from_quaternion([quat.x, quat.y, quat.z, quat.w])

            # 弧度制 → 角度制
            rpy_arc = [0, 0, 0]
            for i in range(len(rpy)):
                # math.pi ≈ 3.141592653589793
                # 弧度转角度公式: degree = radian / π × 180
                rpy_arc[i] = rpy[i] / math.pi * 180

            # 防御性检查（理论上 rpy 固定返回 3 个元素，但这保留安全余量）
            if len(rpy_arc) == 0:
                print('rpy_arc 为空')

            # 组装标签数据: [标签ID, x位置(m), y位置(m), yaw角度(°), 时间戳]
            # 注意: z 坐标和 roll/pitch 角度被丢弃，因为地面机器人只需 2D 位姿
            markers_load.append([marker.id, pos.x, pos.y, rpy_arc[2], time_sec])

        # 原子性地更新 self.markers（虽然 Python GIL 保证了列表赋值的原子性）
        self.markers = markers_load.copy()

    def get_markers(self):
        """
        返回当前帧检测到的所有标签列表（非阻塞，不累积）
        返回值:
          list: 最近一次回调更新的标签列表，每项格式为
                [id, x, y, yaw_deg, timestamp]
          若从未收到任何回调，返回空列表 []
        """
        return self.markers

    def get_nearest_marker(self):
        """
        获取当前视野内 ID 最小的 AR 标签（核心查询接口）

        工作原理:
          1. 循环 scan_iterations 次，每次间隔 scan_delay 秒，
             累积多帧的标签检测结果到 markers 列表中。
             这样做是因为单帧检测可能漏检某个标签，多次采样可提高鲁棒性。
          2. 遍历累积后的所有标签，找出 ID 值最小的那个。
          3. 若最小 ID 仍等于哨兵值 _min_id，说明未检测到任何有效标签，
             返回空列表 []。
          4. 否则返回该标签的完整信息 [id, x, y, yaw_deg, timestamp]。

        为什么选"ID 最小"的标签？
          - 这是项目特定的导航策略：标签 ID 按路径顺序递增排列 (1→2→3→...)
          - 机器人沿路径行进时，最先遇到的标签 ID 最小
          - 通过瞄准最小 ID 标签，机器人可以按顺序逐一导航

        为什么需要累积多帧？
          - AR 标签检测算法 (Alvar) 对光照、遮挡、距离敏感
          - 单帧可能丢失某个标签，但多帧累积可以覆盖检测盲区
          - 扫描 20 次 × 0.01s = 0.2s 的总延迟可接受

        返回值:
          list: 若检测到标签，返回格式为 [id, x, y, yaw_deg, timestamp] 的列表
                若未检测到，返回空列表 []
        """
        # 使用局部变量避免修改实例属性（防御性编程）
        min_id = self._min_id
        min_idx = 0
        markers = []

        # === 第一阶段：多帧扫描累积 ===
        # 重复采样 scan_iterations 次，将每次回调更新的 self.markers
        # 追加到局部 markers 列表中
        for i in range(self._scan_iterations):
            time.sleep(self._scan_delay)     # 等待下一帧到来
            markers += self.markers           # 列表拼接（浅拷贝）

        # === 第二阶段：查找最小有效 ID ===
        # 遍历累积后的所有标签记录，通过比较 m[0]（标签 ID）找出最小值
        # 过滤掉 ID 小于 min_valid_id 的无效标签（如场地上的干扰标签 0）
        for index, m in enumerate(markers):
            if m[0] >= self._min_valid_id and m[0] < min_id:
                min_idx = index               # 记录索引
                min_id = m[0]                 # 更新最小 ID

        # === 第三阶段：结果判定 ===
        # 若 min_id 仍然等于哨兵值，说明整个扫描过程中没有标签的 ID
        # 小于哨兵值，即没有检测到任何有效标签
        if min_id == self._min_id:
            return []                         # 返回空列表表示"无标签"
        else:
            return markers[min_idx]           # 返回最小 ID 标签的完整信息


# ============================================================================
# 测试代码（直接运行此文件时执行）
# ============================================================================

def main():
    """
    独立测试主函数
    初始化 ROS 节点并创建 ImgConverter 实例，持续运行以验证图像订阅正常。
    """
    try:
        rospy.init_node('image_listener')
        print('节点初始化完成')
        image_reader = ImgConverter()

        while True:
            rospy.spin()     # 保持 ROS 节点活跃，处理回调队列
            time.sleep(0.01)  # 降低 CPU 占用

    except rospy.ROSInterruptException:
        pass  # 用户中断时正常退出


# 当直接运行此文件（而非被 import）时，执行 TagConverter 独立测试
if __name__ == '__main__':
    """
    独立测试入口
    初始化 ROS 节点，创建 TagConverter，每秒打印最近标签信息。
    用于验证 AR 标签检测功能是否正常。
    """
    rospy.init_node('image_listener')
    tag = TagConverter()
    while True:
        marker = tag.get_nearest_marker()
        print(marker)        # 打印最近标签信息（或空列表）
        time.sleep(1)
