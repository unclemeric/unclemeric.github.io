---
title: vue-cli使用build命令编译css顺序错乱问题
date: 2018-10-26 17:37:24
tags:
---

最近用 vue-cli 做一个项目引入了 bootstrap 的 css 本来是想组件内的 css 覆盖掉 bootstrap 的 css，但是打包了之后 bootstrpa 的 css 样式被打包到我所写样式的后面，原因是因为在 main.css 引入 bootstrap 顺序的原因

## 解决办法

{% asset_img 20181026174132.png %}
