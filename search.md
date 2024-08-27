---
layout: page
title: 搜索
permalink: /search/
sitemap: false
---
<style>
#search-input {
  /* background-color: #42414d; */
  background-color: #ffffff;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 添加阴影 */
  transition: border-color 0.3s, box-shadow 0.3s;
  color: #222222;
}

/* 暗色模式下的样式 */
@media (prefers-color-scheme: dark) {
  #search-input {
    background-color: #333; /* 暗色模式背景颜色 */
    border: 1px solid transparent;
    color: #a5a5ac; /* 暗色模式文字颜色 */
  }
}

#search-input:focus {
  border-color: #007bff;
  box-shadow: 0 0 8px rgba(0, 123, 255, 0.5);
  outline: none;
  border-color: #00ddff;
}
</style>

<!-- HTML elements for search -->
<input type="text" id="search-input" placeholder="搜索博客文章..">
<ul id="results-container"></ul>

<!-- or without installing anything -->
<script src="https://unpkg.com/simple-jekyll-search@latest/dest/simple-jekyll-search.min.js"></script>

<script>
var sjs = SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: '/search.json'
})

</script>

