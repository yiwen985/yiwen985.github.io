---
layout: page
title: 分类
permalink: /category/
sitemap: false
---

{% comment %}
post 全局分类为“未分类”，但 jekyll 不会覆盖全局分类，而是将它们合并了。
所以该页面需要将未分类下已经分类的 post 排除。

排除逻辑是：
if 分类为未分类 && post.categories.size > 1
    排除该 post
{% endcomment %}

{% for category in site.categories %}
  <h3>{{ category[0] }}</h3>
  <ul>
    {% for post in category[1] %}
      {% if category[0] == "未分类" and post.categories.size > 1 %}
        {% continue %}
      {% endif %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}