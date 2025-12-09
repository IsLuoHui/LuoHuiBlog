---
title: PY32F002B教程
published: 2025-06-19
updated: 2025-06-19
description: 'py32f002b系列芯片启动教程'
image: ''
tags: [Tutorial]
category: 'Embedded'
draft: true
---

# 芯片介绍
PY32F002B 是普冉半导体推出的一款基于 ARM Cortex-M0+ 内核的 32 位微控制器系列，主打低功耗、小封装和高性价比，非常适合用于消费电子、便携设备、工业控制、物联网等场景。
这个系列主打一个便宜和迷你，某宝上平均散装单片售价不超过7毛,封装有 SOP8/14/16/20、QNF16/20和TSSOP20等。

# 开始
本文使用的是<a href="https://doc.embedfire.com/products/link/zh/latest/mcu/puyasemi/ebf_py32f002b.html" target="_blank">野火</a>的 PY32F002BF15U6TR 核心板，芯片使用的QFN20封装，最大频率24MHz，有24KB的Flash和3KB的SRAM，更多信息可以去<a href="https://www.puyasemi.com/py32f002bxilie429/2712.html" target="_blank">普冉官网</a>查看。

## 资料获取
PY32F002BF15U6资料可以在<a href="https://www.puyasemi.com/py32f002bxilie429/2712.html" target="_blank">普冉官网</a>或者<a href="https://www.py32.org/mcu/PY32F002Bxx.html" target="_blank">OpenPuya</a>查看下载。

该芯片目前支持使用Keil、IAR或VSCode+EIDE环境开发，官方也提供了HAL库与LL库函数的例程与使用手册，这些文件均可在下载的 `PY32F002B_Firmware_Vx.x.x.zip` 压缩包中找到。

## 模板工程
