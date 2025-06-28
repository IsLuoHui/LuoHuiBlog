---
title: protobuf构建
published: 2025-06-23
updated: 2025-06-23
description: 'protobuf依赖构建教程'
image: ''
tags: [Tools,Notes,Tutorial]
category: 'Software'
draft: false 
---

# 构建过程

[protobuf-3.6.1源文件下载](https://github.com/protocolbuffers/protobuf/releases/tag/v3.6.1)


下载protobuf-all-3.6.1.tar.gz或者.zip后解压定向到cmake文件夹。修改CMakeLists.txt，在其中添加：
```
add_definitions(-D_SILENCE_STDEXT_HASH_DEPRECATION_WARNINGS)
```
然后顺序执行
```bash
cmake -S . -B build -DCMAKE_INSTALL_PREFIX=C:/protobuf-3.6.1
cmake --build build --config Release
cmake --install build
```
然后你就可以在C盘根目录看到依赖库了，当然这个输出路径可以自己指定。

当然，你会发现这是个Release库不能调试，所以就要编译为Debug版本，这两个版本并不冲突。
```bash
cmake -S . -B build-debug -DCMAKE_BUILD_TYPE=Debug -DCMAKE_INSTALL_PREFIX=C:/protobuf-3.6.1-debug -Dprotobuf_MSVC_STATIC_RUNTIME=ON
cmake --build build-debug --config Debug
cmake --install build-debug --config Debug
```
同样的路径默认也在C盘。