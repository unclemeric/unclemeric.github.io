---
title: Layui项目常见错误及解决方式
date: 2018-10-17 10:46:37
tags: [layui, javascript, js, error]
---

1. try running: npm install xxx
   {% asset_img 20181015155613.png try running: npm install xxx %}

   > 错误提示`try running: npm install gulp`，表示未安装相关依赖，按照提示执行命令安装相关依赖。

1. layui.js:2 GET http://xxx/xx.xx net::ERR_ABORTED 404 (Not Found)
   {% asset_img 20181015164139.png layui.js:2 GET http://xxx/xx.xx net::ERR_ABORTED 404 (Not Found) %}
   {% asset_img 20181015164428.png  %}

   > 1.当页面显示异常或者自己觉得出错了，首先打开浏览器控制台 console（F12）查看有没有报错，然后根据报错去判断引发问题的每一个点。例如这个错误，按 F12 打开控制台,发现`console`报了两个错，一个是 js 的`404`错误，首先想一下在什么地方引入了`index1.js`这个文件，然后确定一下文件存不存在。打开`index.html`，可以看到引入了`index1`文件，然是左边文件夹里并没有这个文件，所以这个问题是由于文件名写错了。  
   > 2.有的人可能会发现图 1 的控制台报了两个错误，第一个可能知道是文件路径不对，但是第 2 个报错并不清楚是因为什么引起的。这里特别提醒找错误不要从下往上看，先解决第一个出现的错误，解决完刷新页面再看后面的错误，也不要纠结一定所有问题一次解决。这里我们把第一个问题解决之后，发现第二个问题是由于第一个问题引起的，解决了第一个问题第二个问题也没有再出现

1. 打包编译事项注意
   > 发布的时候注意 config.js 的两个变量`isProduction:false，isDevelopment:false`，测试环境的时候只需把`isDevelopment`改为`true`，正式环境只需把`isProduction`改为`true`，本地开发的时候把两个都设置成`false`。

> 请求无法回数据或者返回失败，看看是不是未登录或者跨域问题。
