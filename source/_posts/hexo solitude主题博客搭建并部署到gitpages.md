---
title: hexo solitude主题博客搭建并部署到gitpages
categories: 技术
---
[文档](https://solitude.js.org/guide/quick-start.html)、[预览](https://everfu.github.io/Solitude/)

## 安装
按照 [Hexo 官方文档](https://hexo.io/zh-cn/docs/) 进行安装、建站。
```shell
hexo init test # 创建 test 文件夹
```
修改 hexo 根目录配置文件 `_config.yml` ，把主题改为 `solitude` 。​
```yaml
theme: solitude
```
安装依赖
```shell
npm install hexo-renderer-pug hexo-renderer-stylus --save
hexo server # 本地启动
```
优化配置
```shell
copy themes\solitude\_config.yml _config.solitude.yml
```

## 本地搜索
安装插件
```shell
npm install hexo-generator-searchdb
```
修改 `_config.solitude.yml`
```yaml
search:
  enable: true
  type: local # 选择local
```

## 评论
waline
```yaml
comment:
  use: waline # waline, twikoo, valine, artalk
waline: # https://waline.js.org/
  envId: 'your serverURL' # url: https://waline.wzsco.top
```

视频教程：[Waline部署教程（快速上手）](https://www.bilibili.com/video/BV1pB4y1E7fp)

## 部署
将 test 文件夹中所有内容移动到 github 仓库下，根据 [hexo 文档](https://hexo.io/zh-cn/docs/github-pages)进行部署