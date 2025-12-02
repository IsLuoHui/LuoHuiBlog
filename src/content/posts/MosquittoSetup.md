---
title: Mosquitto服务端部署和使用
published: 2025-11-11
updated: 2025-11-11
description: '轻量MQTT服务端工具部署和使用'
image: ''
tags: [Tools,Notes,Tutorial,Linux]
category: 'Software'
draft: true 
---

安装 Mosquitto 和客户端工具
sudo apt update
sudo apt install mosquitto

默认配置文件路径：
/etc/mosquitto/mosquitto.conf

可以自己创建一个自定义配置文件在/etc/mosquitto/conf.d/下

启动 Mosquitto 服务
sudo systemctl start mosquitto
sudo systemctl enable mosquitto
查看
sudo systemctl status mosquitto

注意全局配置和局部配置文件冲突重定义问题