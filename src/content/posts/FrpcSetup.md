---
title: Frp客户端使用
published: 2025-11-11
updated: 2025-11-11
description: 'Frp客户端使用教学'
image: ''
tags: [Tools,Notes,Tutorial,Linux]
category: 'Software'
draft: true 
---

::github{repo="fatedier/frp"}

# 📃 前言
frp 是一个专注于内网穿透的高性能的反向代理应用，支持 TCP、UDP、HTTP、HTTPS 等多种协议，且支持 P2P 通信。可以将内网服务以安全、便捷的方式通过具有公网 IP 节点的中转暴露到公网。（摘自原项目md）

# 🧰 安装准备

> [!WARNING]
> 1.开始之前确保你有一个有公网IP的服务器💦  
> 2.官方没有提供 `linux x86` 的预编译包，需要自行通过源码编译

下载 <a href="https://github.com/fatedier/frp/releases/latest" target="_blank">Frp Release</a> 预编译包，注意选择自己服务器对应架构的包。

# 📂 配置部署
配置文件，示例如下：
```toml
# 服务端地址（这里要填你有公网IP的服务器的IP或者是服务器的域名）
serverAddr = "192.xxx.x.x"
# 服务器端口（Frp 服务端监听的端口）
serverPort = 7000

# 连接协议
transport.protocol = "tcp"

# 认证方式
auth.method = "token"
# 认证所使用的 Token（要和你刚才配置的服务端token完全一样！）
auth.token = "123-abc-123abc"

# 代理配置
[[proxies]]
# 代理名称(标识该代理的名称，根据你的喜好填写）
name = "rocketcat"
# 代理类型（http、https、tcp等）
# 这里要根据你的需求来填写，如果你有域名，就用http
# 如果你没有域名，那就用IP直连，例如:165.0.0.1:8848,此时这里应该写tcp协议
# 如果你用tcp协议就必须把刚才服务端上subDomainHost = "xxxx.com"的配置删除！
# type = "tcp"   # IP+端口直连用这个
type = "http"
# 本地 IP（Frp 客户端需要将流量转发到的本地地址）
localIP = "127.0.0.1"
# 本地端口（Frp 客户端需要将流量转发到的本地端口，根据你要穿透的端口来填写）
localPort = 8848
# 访问此代理的子域名
# 如果你没有域名要用IP直连，请把这句删除掉，否则会导致无法连接！
subdomain = "rocket" # 子域名请根据你拥有的域名配置，配置后通过rocket.xxx.com格式访问

# 如果你不用域名，要用ip+端口直连，请必须加上这句！
# 并且删除 subdomain = "rocket" 
# remotePort = 8848    # 这个端口和localPort 配置的一模一样，这样才能正常访问！
```
更多其他配置参数可以参考官方示例 <a href="https://github.com/fatedier/frp/blob/dev/conf/frpc_full_example.toml" target="_blank">frps_full_example.toml</a>