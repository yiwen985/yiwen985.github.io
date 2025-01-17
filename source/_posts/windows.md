---
title: windows
date: 2025-01-18
categories: 工具
cover: https://pub-c2c1d9230f0b4abb9b0d2d95e06fd4ef.r2.dev/sites/620/2021/09/Hero-Bloom-Logo-800x533.jpg
---

### windows 不显示 flv 视频时长
```powershell
winget install CodecGuide.K-LiteCodecPack.Standard
```

---

### 文件夹布局应用到子文件夹
文件夹属性 - 自定义 - 你想要哪种文件夹，优化此文件夹，下拉菜单每个对应一种（上方`常规项目`会显示修改日期、`视频`会显示时长、`音乐`会显示唱片集），勾选把此模板应用到所有子文件夹(S)

---

### 用键盘代替鼠标
控制面板地址栏输入 `控制面板\轻松使用` - 更改键盘的工作方式 - 启用鼠标键(M)，设置鼠标键(Y)。数字键盘上的`/`让`5`在左右键间切换。[出处](https://zh.wikihow.com/%E7%94%A8%E9%94%AE%E7%9B%98%E6%9D%A5%E4%BB%A3%E6%9B%BF%E9%BC%A0%E6%A0%87%E7%82%B9%E5%87%BB)

---

### desktop.ini
```ini
; 桌面
[.ShellClassInfo]
LocalizedResourceName=@%SystemRoot%\system32\shell32.dll,-21769
IconResource=%SystemRoot%\system32\imageres.dll,-183

; 视频
[.ShellClassInfo]
LocalizedResourceName=@%SystemRoot%\system32\shell32.dll,-21791
InfoTip=@%SystemRoot%\system32\shell32.dll,-12690
IconResource=%SystemRoot%\system32\imageres.dll,-189
IconFile=%SystemRoot%\system32\shell32.dll
IconIndex=-238

; 音乐
[.ShellClassInfo]
LocalizedResourceName=@%SystemRoot%\system32\shell32.dll,-21790
InfoTip=@%SystemRoot%\system32\shell32.dll,-12689
IconResource=%SystemRoot%\system32\imageres.dll,-108
IconFile=%SystemRoot%\system32\shell32.dll
IconIndex=-237

; 图片
[.ShellClassInfo]
LocalizedResourceName=@%SystemRoot%\system32\shell32.dll,-21779
InfoTip=@%SystemRoot%\system32\shell32.dll,-12688
IconResource=%SystemRoot%\system32\imageres.dll,-113
IconFile=%SystemRoot%\system32\shell32.dll
IconIndex=-236

; 文档
[.ShellClassInfo]
LocalizedResourceName=@%SystemRoot%\system32\shell32.dll,-21770
IconResource=%SystemRoot%\system32\imageres.dll,-112
IconFile=%SystemRoot%\system32\shell32.dll
IconIndex=-235

; 下载
[.ShellClassInfo]
LocalizedResourceName=@%SystemRoot%\system32\shell32.dll,-21798
IconResource=%SystemRoot%\system32\imageres.dll,-184
```
