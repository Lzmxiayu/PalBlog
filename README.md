# my_blog

> Blog

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

功能：
写博客
展示博客
评论博客
播放音乐

待做：
浮动显示留言，
音乐播放器（播放提前存好的音乐）


目前问题：
1.ShowBlogs 链接字体受Cover未scoped影响     已解决

2.Cover受body大小影响不能铺满界面
解決方法：
父组件{
  display:grid;
}

3.背景颜色未铺满：
解决：在NavContent设置背景颜色ad
addBlog 

4.发送空对象也成功问题

5.数据库有时收不到数据
解决：是刷新的问题，用settimeout()延迟刷新

6.背景虚化其子元素也虚化

7.音乐文件名不要带空格，audio会播放失败