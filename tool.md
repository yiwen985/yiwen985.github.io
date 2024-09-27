---
layout: base
title: 工具
permalink: /tool/
sitemap: false
---
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

## 数据传输计算器

<div class="container">
    <form id="calculateTransferTime-form" onsubmit="return calculateTransferTime()">
        <label for="fileSize">文件大小:</label>
        <input type="number" id="fileSize" placeholder="输入文件大小">
        <select id="fileSizeUnit">
            <option value="MB">MB</option>
            <option value="GB" selected>GB</option>
        </select>
        <label for="bandwidth">带宽 (Mbps):</label>
        <input type="number" id="bandwidth" placeholder="输入带宽">
        <button onclick="calculateTransferTime()">计算传输时间</button>
    </form>
    <div class="result" id="calculateTransferTime_result"></div>
</div>

## 电费计算

<div class="container">
    <form id="electricity_bill-form" onsubmit="return electricity_bill()">
        <label for="power">功率(W):</label>
        <input type="number" id="power" placeholder="输入功率">
        <label for="electricity_price">电价(元):</label>
        <input type="number" id="electricity_price" value="0.75">
        <button onclick="electricity_bill()">计算电费</button>
    </form>
    <div class="result" id="electricity_bill_result"></div>
</div>

## 计算器

参考 [math.js](https://mathjs.org/)，例如：
- sin(90 deg)
- 5.08 cm + 2 inch
- f(x, y) = x ^ y; f(2,3)

<div class="container">
    <form id="calculator-form" onsubmit="return calculate()">
        <input type="text" id="math_expression" class="display" placeholder="输入数学表达式">
        <button onclick="calculate()">计算结果</button>
    </form>
    <div class="result" id="calculate_result"></div>
</div>

<!-- 数据传输计算器 -->
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

        document.getElementById('calculateTransferTime_result').innerHTML = 
            '传输时间: <br>' + 
            transferTimeInHours.toFixed(1) + ' 时 <br>' + 
            transferTimeInMinutes.toFixed(1) + ' 分钟 <br>' + 
            transferTimeInSeconds.toFixed(1) + ' 秒';
    } else {
        document.getElementById('calculateTransferTime_result').innerHTML = '请填写所有字段。';
    }
    return false;
}
</script>

<!-- 电费计算 -->
<script>
function electricity_bill() {
    var power = document.getElementById('power').value;
    var electricity_price = document.getElementById('electricity_price').value;
    // var bandwidth = document.getElementById('bandwidth').value;

    if (power && electricity_price) {
        const day_hours = 24;
        const mounth_hours = 24 * 30;
        const year_hours = 24 * 365;

        var electricity_bill_in_hours = power * 1 * electricity_price / 1000;
        var electricity_bill_in_days = power * day_hours * electricity_price / 1000;
        var electricity_bill_in_mounths = power * mounth_hours * electricity_price / 1000;
        var electricity_bill_in_years = power * year_hours * electricity_price / 1000;

        document.getElementById('electricity_bill_result').innerHTML = 
            '电费: <br>' + 
            electricity_bill_in_hours + ' 元/时 <br>' + 
            electricity_bill_in_days.toFixed(1) + ' 元/天<br>' + 
            electricity_bill_in_mounths.toFixed(1) + ' 元/月<br>' + 
            electricity_bill_in_years.toFixed(1) + ' 元/年';
    } else {
        document.getElementById('electricity_bill_result').innerHTML = '请填写所有字段。';
    }
    return false;
}
</script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/10.1.1/math.min.js"></script>
<script>
function calculate() {
    let math_expression = document.getElementById('math_expression');
    let resultBox = document.getElementById('calculate_result');
    let expression = math_expression.value;
    try {
        let result = math.evaluate(expression);
        resultBox.innerText = result;
    } catch (error) {
        resultBox.innerText = 'Error';
    }
    return false;
}
</script>