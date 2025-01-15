const fs = require('fs');
const path = require('path');

// 读取映射文件
const mapFilePath = path.join(__dirname, '..', 'picture-cdn-map.json');
const linkMap = JSON.parse(fs.readFileSync(mapFilePath, 'utf8'));

hexo.extend.filter.register('before_post_render', function(data) {
    // 遍历 linkMap，替换内容中的链接
    for (const [localLink, cdnLink] of Object.entries(linkMap)) {
        if(cdnLink === '') continue;
        const regex = new RegExp(localLink, 'g');
        data.content = data.content.replace(regex, cdnLink);
        // console.log(localLink, cdnLink);
    }
    return data;
});
