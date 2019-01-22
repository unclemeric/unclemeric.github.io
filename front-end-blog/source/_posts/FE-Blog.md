---
title: FE-Blog项目说明
date: 2018-10-18 08:39:32
tags: [blog, hexo, hexo-theme, sftp, 一键发布, node]
---

## 说明

本项目是一个交流与分享经验的博客，记录我们项目开发或者学习中积累的一些经验和技术，分享他人。
使用`Hexo`框架快速搭建。`Hexo` 是一个快速、简洁且高效的博客框架。`Hexo` 使用 `Markdown`（或其他渲染引擎）解析文章，在几秒内，即可利用靓丽的主题生成静态网页。

相关知识技术请查看文档：
Hexo 官网文档：[Hexo 文档说明](https://hexo.io/zh-cn/docs/)
Markdown 文档：[Markdown 文档说明](http://www.markdown.cn/)

## hexo-theme-pure

`Hexo`默认带的主题是`landscape`，但本项目使用[`hexo-theme-pure`](https://github.com/cofess/hexo-theme-pure.git)(可点击)主题(此推荐使用[Hexo 主题使用](https://hexo.io/zh-cn/docs/themes))，个人喜好。此项目由于`gitlab`上传失败自定义主题(反正我上传失败了...未知原因)，单单是自定义主题上传失败，系统默认主题成功上传了，所以提交的时候改为了`landscape`。有兴趣的同学可以`clone`下来之后，参照[`Hexo-Theme-Pure`](../../17/hexo-theme-pure)(可点击)这篇文章说明修改主题和相关主题功能配置。

## 项目安装

首先安装 hexo 构建工具(构建项目和页面使用)：

```bash
npm install hexo-cli -g //安装全局命令
```

## 安装依赖

```bash
npm install //安装全局命令
```

## 项目启动

```bash
hexo server
or
hexo s //hexo server的简写
or
npm start (package.json里自定义的启动脚本)
```

项目启动完毕！

## ftp 一键发布

自己写的一段代码使用`node`一键发布项目(懒人福利)，自带备份功能。通过配置一系列参数之后，执行自定义脚本`npm run deploy`。
相关文件包括：
`app.js`
`sftp.config.js`

### 一键发布相关参数配置说明

sftp.config.js

```
const path = require("path");

//服务器项目根路径
const remote_path = "/data/webapps/hwagain-web/blog";

//存放编译之后资源文件夹 此项目需同_config.yml的public_dir值一样 Vue项目为./dist
const assets_path = path.resolve(__dirname, "./public");
module.exports = {
  remote_path,
  assets_path,
  options: {
    host: "192.168.68.207",//ftp服务器ip
    port: "22",//端口
    user: "portal",//ftp用户名
    password: "portal",//ftp密码
    // privateKey: fs.readFileSync("C:/Users/laisf/.ssh/id_rsa"), // 私钥
    passphrase: "" // 私钥密码(为空)
  },
  project_remote_path: remote_path, //项目服务器路径
  public_asset_path: assets_path //指定需要上传的文件夹目录
};
```

### 一键发布

```bash
npm run deploy (package.json里自定义的启动脚本)
or
/**
* hexo clean: 清除缓存及上次编译生成的静态文件
* hexo generate: 编译将博客生成静态文件
* node app.js: 一键发布到ftp服务器
*/
hexo clean && hexo generate && node app.js
```
