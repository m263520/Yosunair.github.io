---
title: 「樱花：Zram Control」
index: true
icon: discover
category:
  - SakuraX
  - Mod
---

::: center
樱花莫洛计划：Zram Control
:::

### 它是什么？
Zram Control 是一个自动检测设备配置，自动修改Zram参数的模块，默认把Zram大小设置为物理运存的两倍，并且进行一些优化操作

### 提要
本模块会以以下优先级配置Zram的压缩格式
 zstd -> lz4 -> lzo-rle -> lzo

### 环境需求：
 - 设备内核不是Pandora内核
 - 未安装其他修改Zram的模块

### 模块下载
请前往[下载中心](./../../../file.html)下载最新版模块