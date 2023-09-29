# 合并视频脚本
# 注意：    仅用于相同格式的视频文件
# 安装：    python
# 使用方法：选中视频文件，一起拖动到该文件上

import sys
import os

def how_to_use():
    print('''
    合并视频脚本
    注意：    仅用于相同格式的视频文件
    安装：    python
    使用方法：选中视频文件，一起拖动到该文件上
    ''')

# 将视频以 file 'video' 的格式放入文件
def generate_file_video_to_concat_file(videos):
    concat_string=''
    for video in videos:
        concat_string += 'file \'' + video + '\'\n'
    concat_file = open('concat.txt', 'w', encoding='utf-8')
    concat_file.write(concat_string)

# 没有视频文件，参数个数为 1
if len(sys.argv) == 1:
    how_to_use()
    print('请将视频文件拖动到此文件')
    os.system("pause")
    sys.exit(1)

filename=os.path.split(sys.argv[1])[1]
cmd = 'ffmpeg -f concat -safe 0 -i concat.txt -c copy -y ../"{}"{}'.format(os.path.splitext(filename)[0], os.path.splitext(filename)[1])
videos = sys.argv[1:]
generate_file_video_to_concat_file(videos)
os.system(cmd)
os.system("pause")
