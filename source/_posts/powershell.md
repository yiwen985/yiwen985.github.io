---
title: powershell
date: 2025-01-26
categories: 工具
cover: /img/powershell.jpg
---

## 配置

- 打开配置文件
```powershell
notepad $PROFILE
```

- 配置
```ps1
# 查看配置文件所在位置，没有就创建，编辑这个文件就行
# echo $PROFILE

# 中文乱码
# chcp 65001

## 设置输出编码为 UTF-8
# $OutputEncoding = [System.Text.Encoding]::UTF8

## 设置控制台的输入和输出编码为 UTF-8
# [Console]::InputEncoding = [System.Text.Encoding]::UTF8
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

# 代理
$env:HTTP_PROXY="http://127.0.0.1:10809"
$env:HTTPS_PROXY="http://127.0.0.1:10809"

# auto suggestions
Import-Module PSReadLine

# Autocompletion for arrow keys
Set-PSReadlineKeyHandler -Key UpArrow -Function HistorySearchBackward
Set-PSReadlineKeyHandler -Key DownArrow -Function HistorySearchForward

Set-PSReadLineOption -HistoryNoDuplicates
# 列表形式显示历史命令
Set-PSReadLineOption -PredictionViewStyle ListView

# 别名
# Set-Alias -Name 7z -Value c:\"Program Files"\7-Zip\7z.exe
```