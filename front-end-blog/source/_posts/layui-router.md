---
title: layui-router项目介绍
date: 2018-10-31 14:22:05
tags: [layui, router]
---

Layui 的路由版本。Layui 还有 iframe 版本，iframe 版特点是：

> - 基于 iframe 标签页实现，简单实用
> - 传统开发模式，撸起袖子直接开干
> - 交互体验相比“单页版”略有点欠缺

路由版比较 iframe 版，有下列好处:

> - 单页面应用方案，所有操作无需跳转
> - 采用前后端分离开发模式，上手略难
> - 更友好的交互体验，减轻浏览器负载

表面上最明显的特点就是浏览器地址栏，iframe 版 url 是这样:
{% asset_img 20181031143900.png %}
{% asset_img 20181031144115.png %}
不同的页面，地址栏居然一样？？？

另一边 router 版的是这样：
{% asset_img 20181031144844.png %}
{% asset_img 20181031144909.png %}
跟想象的一样，每个 url 对应不同的界面。

当我们按浏览器返回或者前进按钮时，iframe 版会出现问题，不能正确的返回或前进页面，而 router 版则没有这种问题。

### 项目结构

```bash
├─json                          //模拟数据文件(相当于api接口列表)
│  ├─layim
│  ├─message
│  ├─user
│  └─workorder
├─layui                         //layui资源文件(插件，里面代码无需理会)
│  ├─css
│  ├─font
│  ├─images
│  └─lay
├─pages                         //页面相关文件
│   ├─controller                //页面控制层
│   ├─lib                       //插件文件
│   │  └─extend
│   ├─pro                       //layui框架文件(与router相关)
│   ├─style                     //自定义样式文件
│   │  └─res
│   └─views                     //页面相关模块存放路径
│       ├─app                   //app模块界面
│       │  └─workorder
│       ├─home                  //home主页模块界面
│       ├─senior                //...
│       ├─system                //...
│       ├─template              //...
│       ├─user                  //...
│       ├─config.js             //项目相关配置文件
│       └─index.js              //router功能代码
└─index.html                    //index入口文件
```

### 路由执行过程

{% asset_img 20181031161907.png %}

### 部分代码讲解

- 路由跳转

```javascript
location.hash = '/home/homepage1'
```

- 页面代码 page/views/home/homepage1.html：

```html
<title>主页一</title>

<div class="layui-card layadmin-header">
    <div class="layui-breadcrumb" lay-filter="breadcrumb">
        <a lay-href="">主页</a>
        <a><cite>主页一</cite></a>
    </div>
</div>

<div class="layui-fluid">
    <div class="layui-row layui-col-space15">
        <div class="layui-col-md4">
            <div class="layui-card">
                <div class="layui-card-header">八卦新闻</div>
                <div class="layui-card-body">
                    <div class="layui-carousel layadmin-carousel layadmin-dataview" data-anim="fade" lay-filter="LAY-index-pageone">
                        <div carousel-item id="LAY-index-pageone">
                            <div><i class="layui-icon layui-icon-loading1 layadmin-loading"></i></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>

<script>
    layui.use('sample', layui.factory('sample'));//引入控制层/page/controller/simple.js
</script>
```

- js 代码 /page/controller/simple.js

```javascript
layui.define(function(e) {
  var a = layui.admin
  layui.use(['admin', 'carousel'], function() {
    ...
    //渲染跑马灯
    e('.layadmin-carousel').each(function() {
      var l = e(this)
      a.render({
        elem: this,
        width: '100%',
        arrow: 'none',
        interval: l.data('interval'),
        autoplay: l.data('autoplay') === !0,
        trigger: t.ios || t.android ? 'click' : 'hover',
        anim: l.data('anim')
      })
    })
  }),
    //渲染图表
    layui.use(['carousel', 'echarts'], function() {
      ...
    }),
    e('sample', {})//定义controller层名字
})
```

### 最后

此 demo 中的各个插件的用法，由于模板是通过手工爬出来的，没有说明文档，但基本的 layui 用法和 iframe 类似，复杂的插件具体用到还需自行琢磨研究。
