---
title: funclip
date: 2025-01-21
category: 工具
cover: https://camo.githubusercontent.com/4078b71de628e573b59d519eb2955801dab54d28edfebb7c59c55dce68b08842/68747470733a2f2f7376672d62616e6e6572732e76657263656c2e6170702f6170693f747970653d7261696e626f772674657874313d46756e436c69702532302532302546302539462541352539322677696474683d383030266865696768743d323130
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
