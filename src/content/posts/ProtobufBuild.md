---
title: Protobuf构建
published: 2025-06-27
updated: 2025-06-29
description: 'protobuf-3.7.1快速构建教程'
image: ''
tags: [Tools,Notes,Tutorial]
category: 'Software'
draft: false 
---

::github{repo="protocolbuffers/protobuf"}

# 📃 前言

Protocol Buffers（简称 Protobuf）是由 Google 开发的一种**高效**、**可扩展**、**跨语言**、**跨平台**的**结构化数据序列化协议**。它常用于网络通信、数据存储、配置文件等场景，尤其适合对性能和数据体积有要求的系统。
- **高效**：二进制格式，序列化/反序列化速度远超json/xml。
- **跨语言**：支持多种语言：C++、Java、Python、Go、C#、Rust、Dart、Kotlin 等。

# 🧰 环境准备
确保已经安装以下工具：
- Visual Studio 2017 或更高版本（含 C++ 工具集）
- CMake ≥ 3.10
- Git

# 📦 拉取源码
```bash
git clone https://github.com/protocolbuffers/protobuf.git
cd protobuf
git checkout v3.7.1
git submodule update --init --recursive
```

# 🛠️ 构建 Debug 和 Release 
```bash
cd cmake
mkdir build
cd build
cmake .. -G "Visual Studio 17 2022" -A x64 -Dprotobuf_BUILD_TESTS=OFF
cmake --build . --config Debug
cmake --build . --config Release
```
> [!TIP]
> 如果使用的是 **VS2019** 请将生成器改为 "Visual Studio 16 2019"  
> 使用 **VS2017** 则改为 "Visual Studio 15 2017"

# 📂 安装输出
```bash
cmake --install . --config Debug --prefix ../install/Debug
cmake --install . --config Release --prefix ../install/Release
```
输出文件在cmake目录中，cmake并不会自动安装Debug构建的pdb文件，需要自行取build/Debug复制。