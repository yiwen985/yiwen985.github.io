---
title: telegram sticker 表情包下载
categories: 工具
date: 2024-07-31
updated: 2024-09-06
excerpt: python 脚本输入 tg 表情包链接下载
cover: https://i2.hdslb.com/bfs/archive/ea8df9aa9a93e1e1223167a02b6e1fd21127cee1.jpg
---

github: [sticker-convert](https://github.com/laggykiller/sticker-convert)

python 脚本

```python
import os
import subprocess
from datetime import datetime

# tg 表情包下载
# 原理：sticker-convert 下载表情包，并用 ffmpeg 进行格式转换
# 软件安装：sticker-convert、ffmpeg
# 设置参数：
#     - telegram_token
#     - （可选）telegram_stickers_dir：表情包存放目录，默认桌面 telegram_stickers 文件夹
#     - （可选）设置代理
#     - （可选）sticker-convert 路径，直接在“#下载源格式表情包”中进行修改
#     - （可选）备份方式：默认3
# 使用方法：双击打开该文件或 python telegram_sticker_download.py，输入表情包链接


# 设置代理
# os.environ["http_proxy"] = "http://127.0.0.1:10809"
# os.environ["https_proxy"] = "http://127.0.0.1:10809"

# 参数设置
# 默认存放位置 $HOME/Desktop/telegram_stickers
telegram_stickers_dir = os.path.join(os.path.expanduser('~'), 'Desktop', 'telegram_stickers')
telegram_token = <token> # 替换整个 <token>
# 源格式表情包位置
input_dir = os.path.join(telegram_stickers_dir, 'original')

# 备份
# 备份文件夹格式：archive_2024-06-09_13-23-35
current_time = datetime.now().strftime('%Y-%m-%d_%H-%M-%S')
archive_dir = os.path.join(telegram_stickers_dir, f'archive_{current_time}')
# 备份方式1：备份源格式表情包文件夹（重命名 original 文件夹为“archive_当前时间”）
# if os.path.exists(input_dir):
#     os.rename(input_dir, archive_dir)
# 备份方式2：备份所有未备份文件（移动所有不含 archive 字符串的文件或文件夹到“archive_当前时间”下）
# import shutil
# for item in os.listdir(telegram_stickers_dir):
#     item_path = os.path.join(telegram_stickers_dir, item)
#     if 'archive' not in item:
#         os.makedirs(archive_dir, exist_ok=True)
#         shutil.move(item_path, archive_dir)
#         print(f"'{item}' 已移动到: {archive_dir}")
# 备份方式3：删除源格式表情包（删除 original 文件夹）
import shutil
if os.path.exists(input_dir):
    shutil.rmtree(input_dir)

# 下载源格式表情包
url = input("输入链接：")
# 命令：sticker-convert --no-confirm --download-auto $url --telegram-token <token> --output-dir $HOME/Desktop/telegram_stickers --preset auto
os.system(f'sticker-convert --no-confirm --download-auto {url} --telegram-token {telegram_token} --output-dir {input_dir} --preset auto')

# 创建输出目录
output_dir = os.path.join(telegram_stickers_dir, url.split('/')[-1])
os.makedirs(output_dir, exist_ok=True)

# 转换 webp 或 webm
for filename in os.listdir(input_dir):
    if filename.endswith('.webp'):
        input_path = os.path.join(input_dir, filename)
        output_path = os.path.join(output_dir, f'{os.path.splitext(filename)[0]}.png')
        subprocess.run(['ffmpeg', '-i', input_path, output_path, '-y'])
    elif filename.endswith('.webm'):
        input_path = os.path.join(input_dir, filename)
        output_path = os.path.join(output_dir, f'{os.path.splitext(filename)[0]}.gif')
        subprocess.run(['ffmpeg', '-i', input_path, output_path, '-y'])

```

token 获取：[@botfarther](https://t.me/botfather) 新建机器人获取

## ayugram
安卓端支持长按表情包保存到相册，但动态表情包下载格式为 webm。
安卓：https://t.me/ayugramfcm
webm转gif：https://cloudconvert.com/
> 注意：gif的体积会大很多

封面出处: [KyleLin1998-哔哩哔哩](https://www.bilibili.com/video/BV1tAb1e6EdH)