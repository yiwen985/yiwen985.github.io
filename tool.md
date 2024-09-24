---
layout: base
title: 工具
permalink: /tool/
sitemap: false
---

## 数据传输计算器
<!-- CHATGPT -->
<style>
    .container {
        max-width: 400px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
    label {
        display: block;
        margin-bottom: 10px;
    }
    input, select {
        width: 100%;
        padding: 8px;
        margin-bottom: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-sizing: border-box;
    }
    button {
        width: 100%;
        padding: 10px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    button:hover {
        background-color: #45a049;
    }
    .result {
        margin-top: 20px;
        font-size: 1.2em;
    }
</style>

<div class="container">
    <label for="fileSize">文件大小:</label>
    <input type="number" id="fileSize" placeholder="输入文件大小">
    <select id="fileSizeUnit">
        <option value="MB">MB</option>
        <option value="GB" selected>GB</option>
    </select>

    <label for="bandwidth">带宽 (Mbps):</label>
    <input type="number" id="bandwidth" placeholder="输入带宽">

    <button onclick="calculateTransferTime()">计算传输时间</button>

    <div class="result" id="result"></div>
</div>

<script>
function calculateTransferTime() {
    var fileSize = document.getElementById('fileSize').value;
    var fileSizeUnit = document.getElementById('fileSizeUnit').value;
    var bandwidth = document.getElementById('bandwidth').value;

    if (fileSize && bandwidth) {
        var fileSizeInBits;
        if (fileSizeUnit === 'GB') {
            fileSizeInBits = fileSize * 8 * 1024 * 1024 * 1024; // 将文件大小转换为比特
        } else {
            fileSizeInBits = fileSize * 8 * 1024 * 1024; // 将文件大小转换为比特
        }

        var bandwidthInBps = bandwidth * 1024 * 1024; // 将带宽转换为比特每秒

        var transferTimeInSeconds = fileSizeInBits / bandwidthInBps;
        var transferTimeInMinutes = transferTimeInSeconds / 60;
        var transferTimeInHours   = transferTimeInMinutes / 60;

        document.getElementById('result').innerHTML = 
            '传输时间: <br>' + 
            transferTimeInHours.toFixed(1) + ' 时 <br>' + 
            transferTimeInMinutes.toFixed(1) + ' 分钟 <br>' + 
            transferTimeInSeconds.toFixed(2) + ' 秒';
    } else {
        document.getElementById('result').innerHTML = '请填写所有字段。';
    }
}
</script>