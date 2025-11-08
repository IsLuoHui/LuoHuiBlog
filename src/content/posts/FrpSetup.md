---
title: Frp服务端部署
published: 2025-11-09
updated: 2025-11-09
description: 'Frp内网穿透搭建教学'
image: ''
tags: [Tools,Notes,Tutorial,Linux]
category: 'Software'
draft: true 
---

::github{repo="fatedier/frp"}

# 📃 前言
frp 是一个专注于内网穿透的高性能的反向代理应用，支持 TCP、UDP、HTTP、HTTPS 等多种协议，且支持 P2P 通信。可以将内网服务以安全、便捷的方式通过具有公网 IP 节点的中转暴露到公网。（摘自原项目md）

# ⚠ 安装须知

> [!WARNING]
> 1.开始之前确保你有一个有公网IP的服务器💦  
> 2.官方没有提供 `linux x86` 的预编译包，需要自行通过源码编译

<a href="https://github.com/fatedier/frp/releases/latest" target="_blank">Frp Release</a>
选择自己服务器对应架构的包

> [!TIP]
> 热知识：Linux系统使用 `uname -m` 查看架构

比如我的服务器 ubuntu x64 系统，就应该下载`frp_0.65.0_linux_amd64.tar.gz`
安装包内应包含
```
frp_0.65.0_linux_amd64/
├── frpc
├── frpc.toml
├── frps
├── frps.toml
└── LICENSE
```
其中frp后缀s和c分别对应服务端Server和客户端Client，`.toml`后缀为配置文件

```sh
wget https://github.com/fatedier/frp/releases/download/v0.65.0/frp_0.65.0_linux_amd64.tar.gz
tar -xvzf frp_0.65.0_linux_amd64.tar.gz 
rm frp_0.65.0_linux_amd64.tar.gz frp_0.65.0_linux_amd64/frpc frp_0.65.0_linux_amd64/frpc.toml
cd frp_0.65.0_linux_amd64
./frps -c frps.toml
```

配置文件模板
```toml
bindAddr = "0.0.0.0"
bindPort = 7000
webServer.addr = "0.0.0.0"
webServer.port = 7500
webServer.user = "admin"
webServer.password = "password"

auth.method = "token"
auth.token = "your-token"
```
更多其他配置参数可以参考官方示例<a href="https://github.com/fatedier/frp/blob/dev/conf/frps_full_example.toml" target="_blank">frps_full_example.toml</a>

创建systemd服务文件
```sh
sudo vim /etc/systemd/system/frps.service
```
配置文件内容如下
```ini
[Unit]
Description=FRP Server Service
After=network.target

[Service]
Type=simple
ExecStart=/root/frp_0.65.0_linux_amd64/frps -c /root/frp_0.65.0_linux_amd64/frps
Restart=on-failure
RestartSec=5s
User=root

[Install]
WantedBy=multi-user.target
```
启用并启动服务
```sh
sudo systemctl daemon-reload
sudo systemctl enable frps
sudo systemctl start frps
```
验证启动状态
```sh
systemctl status frps
```
显示`active (running)`表示启动成功
