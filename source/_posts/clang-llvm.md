---
title: clang、llvm
date: 2025-01-23
categories: 工具
cover: /img/clang.jpg
---

## win 安装

```powershell
winget install Microsoft.VisualStudio.2022.Community 
# 安装VisualStudio后需做下方win的第一步
winget install -e --id LLVM.LLVM
# 现在可转到下方的vscode
```

1. 打开 `Visual Studio Installer`，安装 `使用C++的桌面开发 使用所选工具(包括MSVC、Clang、CMake或MSBuild)生成适用于Windows的现代C++应用。`

2. 双击打开 `C:\Program Files\LLVM\bin\lldb.exe`，看报错如 `由于找不到 python310.dll，无法继续执行代码。重新安装程序可能会解决此问题`，需要去 https://www.python.org/downloads/release/python-31010/ 下载 `Windows embeddable package (64-bit)`，解压到 `C:\Program Files\LLVM\bin\` 文件夹下，现在 `lldb.exe` 可以正常打开。参考 [github](https://github.com/llvm/llvm-project/issues/61878#issuecomment-1492581261)

## vscode 配置

- 安装插件 `ms-vscode.cpptools-extension-pack` 和 `vadimcn.vscode-lldb`
- 插件设置：`C_Cpp.default.compilerPath` 配置路径 `"C_Cpp.default.compilerPath": "C:/Program Files/LLVM/bin/clang.exe"`
- 新建并打开一个文件夹
- 自动生成配置文件 `tasks.json`：新建并打开一个c文件，`Terminal` - `configure default build task`，选择 `clang`，现在可以按 `ctrl + shift + B` 编译出 exe 程序
- 自动生成配置文件 `launch.json`：新建并打开一个c文件，`F5` - `LLDB`，将`<executable file>` 替换为 `${fileBasenameNoExtension}.exe`，现在按 F5 会自动 debug exe 程序
- [可选]按F5自动编译并 debug：`launch.json` 中添加 `"preLaunchTask": "C/C++: clang.exe build active file"`