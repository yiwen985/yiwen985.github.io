---
title: funclip
date: 2025-01-21
category: 工具
cover: /img/Funclip.jpg
---

[github](https://github.com/modelscope/FunClip)

## 安装
```powershell
winget install Python.Python.3.11
winget install ImageMagick.Q16-HDRI
cd FunClip
python.exe -m venv env
.\env\Scripts\Activate.ps1
pip install -r ./requirements.txt
pip uninstall moviepy
pip install moviepy==1.0.3

# 修改 ./funclip/launch.py，打开浏览器
server_name='127.0.0.1'
os.system('C:/"Program Files"/"Mozilla Firefox"/firefox.exe http://127.0.0.1:7860')
```
- [ModuleNotFoundError: No module named 'moviepy.editor'](https://www.reddit.com/r/learnpython/comments/1hb36du/trouble_installing_moviepyeditor/)
