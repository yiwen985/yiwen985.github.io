---
title: 主题简介
date: 2025-01-15 22:34
cover: https://i0.hdslb.com/bfs/archive/de2db520d56718d90c9fc839c20a33b643183326.jpg
categories: 工具
---

## 介绍

Solitude 主题
{% github 'everfu/hexo-theme-solitude' %}
{% link '文档地址' '一款简洁优雅并易用的 Hexo 博客主题' 'https://solitude.js.org/' %}


## 图表公式

{% tabs 图标公式 %}

<!-- tab 数学公式 -->

{% katex %}
c = \pm\sqrt{a^2 + b^2}
{% endkatex %}

```markdown
{% katex %}
c = \pm\sqrt{a^2 + b^2}
{% endkatex %}
```

需要安装插件。虽然主题支持
```shell
npm i hexo-math
```

<!-- endtab -->

<!-- tab mermaid -->

{% mermaid %}
pie
title Key elements in Product X
"Calcium" : 42.96
"Potassium" : 50.05
"Magnesium" : 10.01
"Iron" : 5
{% endmermaid %}

```markdown
{% mermaid %}
pie
title Key elements in Product X
"Calcium" : 42.96
"Potassium" : 50.05
"Magnesium" : 10.01
"Iron" : 5
{% endmermaid %}
```

<!-- endtab -->

<!-- tab chart -->

<script>
const chart_example_data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];
</script>
{% chart %}
type: 'bar',
data: {
    labels: chart_example_data.map(row => row.year),
    datasets: [
        {
            label: 'Acquisitions by year',
            data: chart_example_data.map(row => row.count)
        }
    ]
}
{% endchart %}

```markdown
<script>
const chart_example_data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];
</script>
{% chart %}
type: 'bar',
data: {
    labels: chart_example_data.map(row => row.year),
    datasets: [
        {
            label: 'Acquisitions by year',
            data: chart_example_data.map(row => row.count)
        }
    ]
}
{% endchart %}
```
<!-- endtab -->

{% endtabs %}

## 音视频

安装插件
```shell
npm i hexo-solitude-tag
```

{% tabs 音视频 %}

<!-- tab 哔哩哔哩 -->

{% bvideo BV1CbcGevEKh %}

```markdown
{% bvideo BV1CbcGevEKh %}

{% bvideo video_id %}
```

<!-- endtab -->

<!-- tab youtube -->

{% youtube tMKrECxEpq8 %}

```markdown
{% youtube tMKrECxEpq8 %}

{% youtube video_id [type] [cookie] %}
```
<!-- endtab -->

{% endtabs %}

## 本地搜索

安装插件
```shell
npm install hexo-generator-searchdb
```

修改`_config.yml`
```yml
# 搜索
search:
  path: search.xml
  field: post
  content: true
  format: striptags
```

搜索逻辑：按字符拆分，如搜索`abcd`，会匹配`a.*b.*c.*d`的字符串，其中的`.*`表示任意内容。

## 其他

其他诸如文字模糊、Typeit、折叠、图片、按钮、气泡等，请参考文档地址的`外挂标签使用`。
{% tabs 其他 %}
<!-- tab 复选框 -->
{% checkbox 'style' 'checked' 'content' %}
{% checkbox 'style' unchecked 'content' %}
{% checkbox 'times red' checked '选中' %}
{% checkbox 'plus blue' 'checked' '未选中' %}

```markdown
{% checkbox 'style' 'checked' 'content' %}
{% checkbox 'style' unchecked 'content' %}
{% checkbox 'times red' checked '选中' %}
{% checkbox 'plus blue' 'checked' '未选中' %}
```
<!-- endtab -->

<!-- tab 键盘按键 -->
{% keyboard 'ctrl' %} + {% keyboard 'F' %}

```markdown
{% keyboard 'ctrl' %} + {% keyboard 'F' %}
```
<!-- endtab -->

{% endtabs %}



封面出处: [伍十七啊-哔哩哔哩](https://www.bilibili.com/video/BV1B9W6eaEX1)