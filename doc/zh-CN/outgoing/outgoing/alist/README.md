---
title: 「外发：Alist Mobile」
index: true
icon: discover
category:
  - Outgoing
  - Outgoing
---

::: center
尤苏奈尔基本外发计划：Alist Mobile
:::

### 它是什么？

Alist Mobile是基于[Alist](https://alist.nn.ci/zh/)原版进行了压缩和db配置的模块，预配置了部分参数

### 有何修改？

Alist Mobile 默认在sqlite3的db文件里面配置了用户名和密码为user，并且默认挂载设备本地的/sdcard文件夹到/home路径，方便使用
并且，模块会自动获取WiFi的内网IP地址，修改模块描述，方便同一局域网使用
模块默认配置Alist端口为80端口，因为懒得访问时额外添加端口，并且关闭了log
模块默认会把Alist数据存储文件放到/data/adb/ltd.womi.mod/alist，实现更新不重置数据，只有卸载模块才会清理数据

### 环境需求

由于Alist官方只提供了arm64、arm和x86_64架构的musl交叉编译的程序文件，所以不支持x86架构(我当然也不会去编译)
虽然安装包内同时放了三个架构的程序文件，但是都经过了高压缩率压缩，安装包体积仅有30兆左右

### 模块下载
请前往[下载中心](./../../../file.html)下载最新版模块