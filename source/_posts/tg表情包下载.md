---
title: telegram sticker 表情包下载
categories: 技术
date: 2024-07-31
---

github: [sticker-convert](https://github.com/laggykiller/sticker-convert)

windows ps1 脚本
```ps1
$url = Read-Host "输入链接"

sticker-convert.exe --no-confirm --download-auto $url --telegram-token <token> --output-dir C:/Users/<user>/Downloads/stickers_output --preset custom --vid-format ".gif" --img-format ".png" 

explorer C:\Users\<user>\Downloads\stickers_output
```

token 获取：[@botfarther](https://t.me/botfather) 新建机器人获取