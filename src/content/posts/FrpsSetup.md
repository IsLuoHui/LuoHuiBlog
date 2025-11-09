---
title: Frp服务端部署
published: 2025-11-09
updated: 2025-11-09
description: 'Frp内网穿透搭建教学'
image: ''
tags: [Tools,Notes,Tutorial,Linux]
category: 'Software'
draft: false 
---

::github{repo="fatedier/frp"}

# 📃 前言
frp 是一个专注于内网穿透的高性能的反向代理应用，支持 TCP、UDP、HTTP、HTTPS 等多种协议，且支持 P2P 通信。可以将内网服务以安全、便捷的方式通过具有公网 IP 节点的中转暴露到公网。（摘自原项目md）

# 🧰 安装准备

> [!WARNING]
> 1.开始之前确保你有一个有公网IP的服务器💦  
> 2.官方没有提供 `linux x86` 的预编译包，需要自行通过源码编译

下载 <a href="https://github.com/fatedier/frp/releases/latest" target="_blank">Frp Release</a> 预编译包，注意选择自己服务器对应架构的包。

> [!TIP]
> 热知识：Linux系统使用 `uname -m` 查看架构

比如我使用的服务器为 ubuntu x64 系统，就应该下载 `frp_0.65.0_linux_amd64.tar.gz`  
包内文件结构：
```
frp_0.65.0_linux_amd64/
├── frpc
├── frpc.toml
├── frps
├── frps.toml
└── LICENSE
```
其中 frp 后缀分别对应服务端 Server 和客户端 Client，`.toml`后缀为配置文件。  
找到需要的文件后可以复制下载链接后wget或者下载后直接传到服务器上。

# 📂 配置部署
```sh
# 下载对应架构包
wget https://github.com/fatedier/frp/releases/download/v0.65.0/frp_0.65.0_linux_amd64.tar.gz

# 解压缩文件
tar -xvzf frp_0.65.0_linux_amd64.tar.gz 

# 删除客户端不需要的文件
rm frp_0.65.0_linux_amd64.tar.gz frp_0.65.0_linux_amd64/frpc frp_0.65.0_linux_amd64/frpc.toml

# 启动程序
cd frp_0.65.0_linux_amd64
./frps -c frps.toml
```
当然在启动程序之前你还需要写配置文件，示例如下：
```toml
# 穿透监听<tcp>
bindAddr = "0.0.0.0"
bindPort = 7000

# 需要内网 http/https 代理穿透时启用
#vhostHTTPPort = 80
#vhostHTTPSPort = 443

# 子域名支持
subDomainHost = "xxxx.com"

# Web 控制面板<tcp>
webServer.addr = "0.0.0.0"
webServer.port = 7500
webServer.user = "admin"
webServer.password = "password"

# Log 文件输出
log.to = "./frps.log"
log.level = "info"
log.maxDays = 7

# 客户端连接认证
auth.method = "token"
auth.token = "your-token"
```
更多其他配置参数可以参考官方示例 <a href="https://github.com/fatedier/frp/blob/dev/conf/frps_full_example.toml" target="_blank">frps_full_example.toml</a> ，不要忘记在服务器安全组规则放行响应端口哦。这个时候已经可以正常使用了，但是为了确保能够服务器运行或者出现其他程序错误时能够自动重启，可以将其添加到系统服务中。

创建systemd服务文件
```sh
sudo vim /etc/systemd/system/frps.service
```
配置文件内容如下，其中`<path>`换为你的安装路径。<span class="heimu" title="你知道的太多了">./frps -c frps.toml 的绝对路径版本（</span>
```ini
[Unit]
Description=FRP Server Service
After=network.target

[Service]
Type=simple
ExecStart=<path>/frps -c <path>/frps.toml
Restart=on-failure
RestartSec=5s
User=root

[Install]
WantedBy=multi-user.target
```
然后刷新启用并启动服务
```sh
sudo systemctl daemon-reload
sudo systemctl enable frps
sudo systemctl start frps
```
验证启动状态
```sh
systemctl status frps
```
显示 `active (running)` 表示启动成功
