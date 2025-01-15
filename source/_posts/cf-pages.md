---
title: cloudflare pages 部署 minima 报错 invalid byte sequence in US-ASCII
categories: 工具
date: 2024-08-25
updated: 2024-08-28
excerpt: 修改文件报错部分即可
cover: https://i0.hdslb.com/bfs/archive/f37d2763f03dc083ba02eb30919ccccc9c4606c0.jpg
---

报错信息如下：

```log
02:23:09.362	[!] There was an error parsing `Gemfile`: 
02:23:09.362	[!] There was an error while loading `minima.gemspec`: invalid byte sequence in US-ASCII. Bundler cannot continue.
02:23:09.363	
02:23:09.363	 #  from /opt/buildhome/repo/minima.gemspec:15
02:23:09.363	 #  -------------------------------------------
02:23:09.363	 #  
02:23:09.363	 >    spec.files = `git ls-files -z`.split("\x0").select do |f|
02:23:09.363	 #      f.match(%r!^(assets|_(includes|layouts|sass)/|(LICENSE|README)((\.(txt|md|markdown)|$)))!i)
02:23:09.363	 #  -------------------------------------------
02:23:09.363	. Bundler cannot continue.
02:23:09.364	
02:23:09.364	 #  from /opt/buildhome/repo/Gemfile:4
02:23:09.364	 #  -------------------------------------------
02:23:09.364	 #  source "https://rubygems.org"
02:23:09.364	 >  gemspec
02:23:09.364	 #  
02:23:09.364	 #  -------------------------------------------
02:23:09.370	Error: Exit with error code: 14
02:23:09.370	    at ChildProcess.<anonymous> (/snapshot/dist/run-build.js)
02:23:09.370	    at Object.onceWrapper (node:events:652:26)
02:23:09.370	    at ChildProcess.emit (node:events:537:28)
02:23:09.370	    at ChildProcess._handle.onexit (node:internal/child_process:291:12)
02:23:09.379	Failed: build command exited with code: 1
02:23:10.208	Failed: error occurred while running build command
```

解决办法：

`minima.gemspec` 修改如下：

```ruby
# spec.files = `git ls-files -z`.split("\x0").select do |f|
#   f.match(%r!^(assets|_(includes|layouts|sass)/|(LICENSE|README)((\.(txt|md|markdown)|$)))!i)
# end
spec.files = Dir["**/*"].select do |f|
  f.match(%r!^(assets|_(includes|layouts|sass)/|(LICENSE|README)((\.(txt|md|markdown)|$)))!i)
end
```

---

## 其他
### 环境变量

- `JEKYLL_ENV`：`production` 用于开启评论[^1]
- `UNSTABLE_PRE_BUILD`：可用于运行命令，如更新插件可安装更新的 ruby 版本 `asdf plugin update ruby`[^2]

[^1]: https://jekyllrb.com/docs/configuration/environments/
[^2]: https://community.cloudflare.com/t/no-bun-support-how/554291

封面出处: [葉玖洛-哔哩哔哩](https://www.bilibili.com/video/BV1Sp4y157br)
