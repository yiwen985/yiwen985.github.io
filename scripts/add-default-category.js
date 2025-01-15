// 文章默认分类为`未分类`
// hexo.extend.filter.register('before_post_render', function(data) {
//     // data.categories = data.categories || '未分类';
//     // data.categories = data.categories || ['未分类'];
//     // console.log(data.title, '的分类为: ', data.categories);
//     if(!data.categories.length) {
//         data.categories = [{ name: 'test' }];
//         console.log(data.title, '的分类为: ', data.categories.data[0]);
//     }
//     return data;
// });


// hexo.extend.filter.register('before_generate', function() {
//     // 获取所有的文章
//     const posts = hexo.locals.get('posts');
  
//     // 遍历每篇文章
//     posts.forEach(post => {
//         // 修改分类数据
//         if (!post.categories.length) {
//             post.categories = post.categories.map(category => {
//                 return '未分类'
//             });
//             console.log(post.title, '的分类为: ', post.categories);
            
//         }
//     });
// });


// _Query {
//     data: [
//       _Document {
//         name: '技术',
//         _id: 'cm5y5phvu0003h0ao8hm7a8gr',
//         slug: [Getter],
//         path: [Getter],
//         permalink: [Getter],
//         posts: [Getter],
//         length: [Getter]
//       }
//     ],
//     length: 1
//   }

// _Query { data: [], length: 0 }
// hexo.extend.filter.register('before_post_render', function(data) {
    
// });
