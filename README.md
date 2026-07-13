# 机器人搬箱子任务控制系统

基于 ROS + leju 动作库的自主导航与操作机器人，完成 **寻找方块 → 抓取 → AR标签导航 → 放置 → 返回** 的完整循环任务。

## 目录结构

```
demo14/
├── main.py                 # 主入口 + 状态机循环
├── config.json             # 全局配置文件（所有可调参数）
├── config_loader.py        # 配置加载模块（支持 JSON + // 注释）
├── actions.py              # 29个动作包装函数 + 字符串调度系统
├── sensors.py              # 摄像头图像采集 + AR标签检测
├── box_detector.py         # YOLO方块检测 + 位姿对准抓取
├── tag_navigator.py        # AR标签9级决策树对正 + 路径点查找
├── search.py               # 方块/标签搜索模式
├── yolo_detector.py        # YOLO推理模块（ultralytics/ONNX）
├── image_Tag_converter.py  # ROS底层接口（ImgConverter + TagConverter）
├── Actionlib.lua           # Lua动作库（200+动作）
├── models/                 # YOLO模型文件目录
│   └── best.pt
```

## 快速开始

### 环境依赖

机器人端已预装 ROS Noetic + leju 动作库，需额外安装 YOLO 相关依赖。

**Python 版本：** 3.9（机器人端实测）

```bash
# 注意：ROS 已自带 cv2 和 numpy，不要覆盖系统版本
# opencv-python-headless 避免与 ROS 的 GUI 库冲突
pip install ultralytics==8.3.0 \
            opencv-python-headless==4.10.0.84 \
            numpy==2.0.2
```

> **版本兼容说明：**
> - Python 3.9 兼容 ultralytics 最新稳定版
> - `opencv-python-headless`：使用 headless 版避免与 ROS 的 cv2 GUI 库冲突
> - `numpy==2.0.2`：Python 3.9 兼容，ROS 环境需确认不覆盖系统 numpy（若冲突降为 1.26.4）

### 模型准备

将训练好的 YOLO 模型放入 `models/` 目录，在 `config.json` 中配置：

```json
"yolo": {
    "model_name": "best",
    "backend": "ultralytics"
}
```

### 运行

```bash
python main.py
```

## 任务流程

```
┌─ 阶段一：找方块 ────────────────────────────────────────┐
│  YOLO检测 green_square/orange_square                    │
│  → 左右平移对准 → 前进靠近 → 抓取                        │
│  → box_transition（前进+右转）→ 进入标签导航             │
└────────────────────────────────────────────────────────┘

┌─ 阶段二：AR标签导航（去程 step1）─────────────────────────┐
│  标签1→2→3→4→5（大本营）                                 │
│  每步：YOLO远距离发现 → CV近距离精准对正 → 过渡移动        │
│  标签5：前进深入 → 放下方块 → 右转调头 → step切换为2       │
└────────────────────────────────────────────────────────┘

┌─ 阶段三：AR标签导航（返程 step2）─────────────────────────┐
│  标签5(反向)→6→7→1(反向)                                  │
│  标签1对正完毕 → 任务重置 → 回到阶段一                     │
└────────────────────────────────────────────────────────┘
```

## 配置说明

所有参数通过 `config.json` 集中管理，支持 `//` 行内注释，修改后重启即生效。

### 主要配置节

| 节 | 说明 |
|----|------|
| `yolo` | 模型名、后端、置信度阈值、类别映射 |
| `box_detection` | 方块对准阈值、抓取容忍度、动作名 |
| `box_priority` | 颜色优先级（green > orange） |
| `tag_alignment` | 标签对正默认阈值、9级决策树偏移量 |
| `waypoints` | 全部路径点定义（step1/step2） |
| `actions.sleep_times` | 每个动作执行后的稳定等待时间 |
| `timing` | 初始化延迟、主循环间隔 |
| `no_marker_fallback` | 无标签时的兜底搜索动作 |

### 关键配置示例

```json
// 标签5大本营：放宽角度容忍，左右不对称
{"tag_id": 5, "theta_threshold_left": 30, "theta_threshold_right": 20}

// 抓取容忍：向内收窄10px
"grab_tolerance": 10

// 接近方块最大步数：超出部分抓取后同方向退回
"max_approach_steps": 5
```

## 模块说明

### config_loader.py
配置加载基础设施。支持 `//` 行内注释的JSON格式，提供 `cfg('a','b','c', default=val)` 安全逐级访问。配置文件缺失时自动回退到内置默认值。

### actions.py
29个动作包装函数，每个封装 `base_action.action()` 调用。通过 `ACTION_REGISTRY` 字典实现字符串→函数调度，使 `config.json` 中的动作序列可直接引用函数名。

### sensors.py
`RobotSensors` 类聚合摄像头图像采集（后台线程）和 AR 标签检测，提供线程安全的图像帧读取和标签查询。

### box_detector.py
- `find_box()`：YOLO检测方块，按颜色优先级+面积选择目标
- `goto_box()`：先X轴左右对准→再Y轴前后对准→到位后执行抓取三连

### tag_navigator.py
- `turn_to_tag()`：9级决策树多级逼近算法
  - L1后退 → L2大角度转向 → L3快速逼近 → L4方向对正 → L5粗调平移 → L6精调平移 → L7慢速逼近 → L8精调逼近 → L9对正完成
  - 支持左右不对称角度容忍度（`theta_threshold_left` / `theta_threshold_right`）
- `find_waypoint()`：根据tag_id + step查找路径点配置

### search.py
- `box_search()`：连续5次未找到方块后左转搜索
- `tag_search()`：兜底→右转→左转三轮交替搜索模式

### yolo_detector.py
YOLO推理封装，支持 ultralytics (PyTorch) 和 ONNX Runtime 两种后端。提供 `detect()`、`detect_boxes()`、`detect_artag()` 接口。

### main.py
- `RobotState` 数据类：统一管理所有运行时状态（消除全局变量）
- 主状态机循环：组装各模块完成完整任务

## ARTag 混合检测策略

```
CV检测（Alvar）→ 有数据？
  ├─ 有 → turn_to_tag() 精准对正（9级决策树）
  └─ 无 → YOLO检测 artag？
           ├─ 有 → 比例控制靠近（偏左左转/偏右右转/居中前进）
           └─ 无 → 搜索模式（兜底→右转→左转交替）
```

## 部署

```bash
# 将项目目录复制到机器人
scp -r aelos_b2/ leju@<robot_ip>:/mnt/leju_data/botec/

# 在机器人上运行
cd /mnt/leju_data/botec/demo
python main.py
```
