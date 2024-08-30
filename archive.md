---
layout: base
title: 归档
permalink: /archive/
sitemap: false
---
<style>
    a.button {
        display: inline-block;
        padding: 10px 20px;
        background-color: #007BFF; /* 按钮的背景颜色 */
        color: #ffffff; /* 文本颜色 */
        text-decoration: none; /* 去掉下划线 */
        border-radius: 25px; /* 圆角半径 */
        font-size: 16px; /* 字体大小 */
        font-weight: bold; /* 字体粗细 */
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 阴影效果 */
        transition: background-color 0.3s ease; /* 背景颜色过渡效果 */
        margin-right: 10px;
        margin-bottom: 10px;
    }

    a.button:hover {
        background-color: #0056b3; /* 鼠标悬停时的背景颜色 */
    }
</style>

## 分类

{% for category in site.categories -%}
  <a href="{{ site.baseurl }}/category/{{ category[0] }}" class="button">{{ category[0] }}</a>
{%- endfor %}


## 标签

{% for tag in site.tags -%}
  <a href="{{ site.baseurl }}/tag/{{ tag[0] }}" class="button">{{ tag[0] }}</a>
{%- endfor -%}