---
title: Vue项目常见错误及解决方式
date: 2018-10-17 11:47:43
tags: [vue, error, npm, webpack]
---

1. 安装超时(install timeout)

- cnpm : 国内对 npm 的镜像版本

```bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
// cnpm 的大多命令跟 npm 的是一致的,比如安装,卸载这些复制代码
```

- yarn 和 npm 改源

```javascript
使用 nrm 模块 : www.npmjs.com/package/nrm
npm config : npm config set registry https://registry.npm.taobao.org
yarn config : yarn config set registry https://registry.npm.taobao.org
```

---

2. can't not find 'xxModule' - 找不到某些依赖或者模块
   > 这种情况一般报错信息可以看到是哪个包抛出的信息.
   > 一般卸载这个模块,安装重新安装下即可.

---

3. data functions should return an object
   > 这个问题是 Vue 实例内,单组件的 data 必须返回一个对象;如下

```javascript
export default {
  name: 'page-router-view',
  data() {
    return {
      tabs: [
        {
          title: '帐号信息',
          url: '/userinfo/base'
        }
      ]
    }
  }
}
```

> 为什么要 return 一个数据对象呢?
> 官方解释如下: data 必须声明为返回一个初始数据对象的函数，因为组件可能被用来创建多个实例。如果 data 仍然是一个纯粹的对象，则所有的实例将共享引用同一个数据对象！
> 简言之,组件复用下,不会造成数据同时指向一处,造出牵一发而动全身的问题

4. 在函数内用了 this.xxx=,为什么抛出 Cannot set property 'xxx' of undefined;
   > 这又是 this 的套路了..this 是和当前运行的上下文绑定的...
   > 一般你在 axios 或者其他 promise , 或者 setInterval 这些默认都是指向最外层的全局钩子.
   > 简单点说:"最外层的上下文就是 window,vue 内则是 Vue 对象而不是实例!";
   > 解决方案:

> 暂存法: 函数内先缓存 this , let that = this;(let 是 es6, es5 用 var)
> 箭头函数: 会强行关联当前运行区域为 this 的上下文;

5. Component template shold contain exactly one root element.If you are useing v-if on multiple elements , xxxxx

   > 单组件渲染 DOM 区域必须要有一个根元素,不能出现同级元素.可以用 v-if 和 v-else-if 指令来控制其他元素达到并存的状态
   > 换个直白的解释,就是有一个唯一的父类,包裹者;
   > 比如一个 div(父包含块) 内部多少个同级或者嵌套都行,但是最外层元素不能出现同级元素!!!!

6. No 'Access-Control-Allow-Origin' header is present on the requested resource.

- nginx 反向代理
- webpack proxy 配置(开发环境下)

```javascript
// 在 config 目录下的index.js

proxyTable: {
 "/bp-api": {
   target: "http://new.d.st.cn",
   changeOrigin: true,
   // pathRewrite: {
   //   "^/bp-api": "/"
   // }
 }
}
```

- 修改本地 host 文件 改成相同的二级域名例如 `xxx.hwagain.com`
- 后台设置可跨域
- jsonp，不过局限性比较多,比较适合一些特殊的信息获取!

7. Error in render function:"Type Error: Cannot read property 'xxx' of undefined"

8. Uncaught ReferenceError: xxx is not define

9. TypeError: xxx is not a function

10. 安装模块时命令窗口输出 unsupported platform xxx

    > 一般两种情况,node 版本不兼容,系统不兼容;

11. Failed to mount component: template or render function not defined

- 组件没有正确引入(或组件文件内容为空)
- 挂载点顺序错了

12. Unknown custom element: `<xxx>` - did you register the component correctly?

    > 组件未导入对应的组件或者组件引入了但是未在 components 声明注册

13. axios 的 post 请求后台接受不到

    > axios 默认是 json 格式提交,确认后台是否做了对应的支持;
    > 若是只能接受传统的表单序列化,就需要自己写一个转义的方法.当然还有一个更加省事的方案,引入`qs`，使用`qs.stringify(params)`转义参数

14. Module not found: Error : Can't resolve xxx-loader in xxxx

    > 这里问题一般就是 webpack 的配置文件你改动了或对应的 loader 没有装上

15. npm run dev 报端口错误!Error: listen EADDRINUSE :::8080

    > 端口被占用，在 config/index.js 修改开发环境下的端口号
    > {% asset_img ./images/20181016105228.png %}

16. 什么时候用 v-if,什么用 v-show

    > 我们先来说说两者的核心差异;  
    > v-if : DOM 区域没有生成,没有插入文档..等条件成立的时候才动态插入到页面!
    > 有些需要遍历的数组对象或者值,最好用这货控制,等到拿到值才处理遍历,不然一些操作过快的情况会报错,比如数据还没请求到!  
    > v-show: DOM 区域在组件渲染的时候同时渲染了,只是单纯用 css 隐藏了
    > 对于下拉菜单,折叠菜单这些数据基本不怎么变动.用这个最合适了..而且可以改善用户体验,因为它不会导致页面的重绘,DOM 操作会!  
    > 简言之: DOM 结构不怎么变化的用 v-show, 数据需要改动很大或者布局改动的用 v-if

17. 单组件中里面的 import xxx from '@/components/layout/xxx'中的@是什么
    > webpack 可以配置 alias(也就是路径别名),
    > 文件名: `build -> webpack.base.conf.js`

```javascript
resolve: {
    extensions: [".js", ".vue", ".json"], // 可以导入的时候忽略的拓展名范围
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": resolve("src"),  // 这里就是别名了,比如@就代表直接从/src 下开始找起!!!
      "~": resolve("src/components")
    }
  }
```

18. SyntaxError: Unexpected identifier;
    > 语法错误,看错误信息去找到对应的页面排查
