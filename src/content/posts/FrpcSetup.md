---
title: Frp客户端使用
published: 2025-11-11
updated: 2025-12-09
description: 'Frp客户端使用教学'
image: ''
tags: [Tools,Notes,Tutorial,Linux]
category: 'Software'
draft: false 
---

::github{repo="fatedier/frp"}

# 📃 前言
相关frp的信息在[Frp服务端部署](/posts/frpssetup/)有过介绍，相关要求在此也就不赘述了。

# 🧰 安装准备

下载 <a href="https://github.com/fatedier/frp/releases/latest" target="_blank">Frp Release</a> 预编译包，注意选择自己设备对应架构的包。

# 📂 配置部署
配置文件，示例如下：
```toml
# 用户名与name组成代理名称，服务端dashboard具体显示为user.name
user = "AB"

# 服务端地址和端口
serverAddr = "x.x.x.x"
serverPort = 7000

# 认证方式
auth.method = "token"
# 认证所使用的Token要和服务端完全一样
auth.token = "114514abc"

# 代理配置
[[proxies]]
# 代理名称
name = "Minecraft"
# 代理类型
type = "tcp"
# 本地目标IP
localIP = "127.0.0.1"
# 本地端口
localPort = 25565
# 远程端口和localPort配置一致才能正常访问
remotePort = 8848    
```
更多其他配置参数可以参考官方示例 <a href="https://github.com/fatedier/frp/blob/dev/conf/frpc_full_example.toml" target="_blank">frps_full_example.toml</a>