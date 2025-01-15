---
layout: post
title: linux网盘工具
date: 2024-09-02
updated: 2024-09-02
categories: 工具
excerpt: linux 挂载网盘的一些工具，以及网盘推荐
cover: https://i1.hdslb.com/bfs/archive/fd103e0131c79f81b9a4a91c9a8ac9b966a74c70.jpg
---

网盘之间互传文件：alist
挂载工具：rclone
低成本网盘：onedrive（office 365 合租，1T，可长久挂载）
大容量网盘：115（挂载失效快）
> 如需上传大文件，不要用 rclone 挂载 alist 的 webdav

## rclone 挂载 onedrive
挂载 onedrive
1. https://rclone.org/onedrive/
2. 远程机器挂载所需的额外操作：https://rclone.org/remote_setup/
   本地安装 rclone，通过 `rclone.exe authorize "onedrive"` 获取 `code`，然后粘贴到第一步里

## 查看文件夹占用，定期删除日志文件
通过 du 命令发现 log 文件占用了大量空间
```shell
root:~# du -d 1 -h /
...
3.0G	/usr
6.2G	/var
126M	/boot
...

root:~# du -d 1 -h /var/
...
2.1G	/var/lib
4.0G	/var/log
...

root:~# du -d 1 -h /var/log
...
3.9G	/var/log/journal
...
```

配置定期删除日志
```shell
# 保存 2 天，最大 500 M
# 来自：https://blog.csdn.net/qq_27384769/article/details/121472673
journalctl --vacuum-time=2d
journalctl --vacuum-size=500M
```

封面出处: [AI笔记本-哔哩哔哩](https://www.bilibili.com/video/BV1yV411k7CB)
