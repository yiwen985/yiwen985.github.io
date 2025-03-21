---
title: rsshub及阅读器部署
date: 2024-09-10
updated: 2024-09-19
categories: 工具
excerpt: 可部署在国内
cover: https://i1.hdslb.com/bfs/archive/b182250fd6a763ae428a08c10b8b51d01f55ca9e.jpg
---

## rsshub miniflux 一键部署

docker-compose.yml 下载：[rsshub-miniflux-docker-compose.yml](/download_files/rsshub-miniflux-docker-compose.yml)

```yml
# 需要修改
rsshub:
  environment:
    # PROXY_URI: 'http://172.17.0.1:10809' # 代理，172.17.0.1 表示宿主机 ip
    BILIBILI_COOKIE_{uid}: ''
    TWITTER_USERNAME: ''
    TWITTER_PASSWORD: ''
    TWITTER_AUTH_TOKEN: ''
    WEIBO_COOKIES: ''
miniflux:
  environment:
    - ADMIN_USERNAME=<用户名>
    - ADMIN_PASSWORD=<密码>
    # - HTTP_PROXY=http://172.17.0.1:10809     # 代理
    # - HTTPS_PROXY=http://172.17.0.1:10809    # 代理
    # - NO_PROXY=localhost,127.0.0.1,rsshub,db # 代理
```

访问 rsshub：`服务器ip:1200`
访问 miniflux：`服务器ip:12345`

miniflux 可设置：语言、文章排序（新→旧）、推送 telegram bot（设置 - 集成 - Telegram Bot）

> 集成 telegram：
> 1. https://t.me/BotFather 新建机器人，获取令牌
> 2. https://t.me/getidsbot 获取聊天ID

## 订阅

### rsshub 扩展添加源

![](/img/rsshub_extension.png)

### miniflux 添加源

- 微博：http://rsshub:1200/weibo/user/3966075666
- 知乎：http://rsshub:1200/zhihu/people/activities/ddaa117
- 推特：http://rsshub:1200/twitter/user/rinchan_nanoda
- 油管：http://rsshub:1200/youtube/community/@bulianglin
- 哔哩哔哩：http://rsshub:1200/bilibili/user/dynamic/53456
- ……

## 内存占用

```txt
root@debian:~# docker stats --no-stream
NAME                     MEM USAGE / LIMIT 
rsshub_miniflux_1        38.75MiB / 3.79GiB
rsshub_rsshub_1          326.1MiB / 3.79GiB
rsshub_redis_1           9.781MiB / 3.79GiB
rsshub_db_1              25.62MiB / 3.79GiB
rsshub_browserless_1     94.52MiB / 3.79GiB
```

## 其他阅读器

### RSS-to-Telegram-Bot

推送到 telegram，消息更详细，[部署指南](https://github.com/Rongronggg9/RSS-to-Telegram-Bot/blob/dev/docs/deployment-guide.md)。
[Github 仓库](https://github.com/Rongronggg9/RSS-to-Telegram-Bot)
参考配置 [rsstt-docker-compose.yml](/download_files/rsstt-docker-compose.yml)
rsshub 浏览器扩展需修改实例为 `http://rsshub:1200`
我的 rss 机器人：[@rss_yiwen985_bot](https://t.me/rss_yiwen985_bot)


封面出处: [咕咕乔233-哔哩哔哩](https://www.bilibili.com/video/BV1VR4y1g7qm)
