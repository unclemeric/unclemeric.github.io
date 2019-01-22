---
title: VS Code 代码格式化配置
date: 2018-10-19 15:10:43
tags: [vs code, formatter, setting]
---

## 目的

统一代码格式，美化代码。

## 配置

首先，vetur 默认设置是这个样的。也就是很多是用的 prettier 插件。
打开`文件 -> 首选项 -> 设置`的`用户设置`加入下列配置信息：
{% asset_img 20181019154332.png  %}

```
"git.autofetch": false,
// 控制终端游标是否闪烁。
"terminal.integrated.cursorBlinking": true,
"editor.fontFamily": "Consolas",
"vetur.format.defaultFormatter.css": "prettier",
"vetur.format.defaultFormatter.postcss": "prettier",
"vetur.format.defaultFormatter.scss": "prettier",
"vetur.format.defaultFormatter.less": "prettier",
"vetur.format.defaultFormatter.stylus": "stylus-supremacy",
"vetur.format.defaultFormatter.js": "prettier",
"vetur.format.defaultFormatter.ts": "prettier",
// "[javascript]": {
//   "editor.formatOnSave": true
// },
"[css]": {
    "editor.formatOnSave": true
},
"[scss]": {
    "editor.formatOnSave": true
},
"[vue]": {
    "editor.formatOnSave": true
},
"prettier.tabWidth": 2,
//取消js单引号自动转换成双引号
"prettier.semi": false,
"prettier.singleQuote": true,
"[markdown]": {
    "editor.formatOnSave": true,
    "editor.wordWrap": "on",
    "editor.renderWhitespace": "all",
    "editor.acceptSuggestionOnEnter": "off"
}
```

## 编辑器配置

在项目文件中新建`.editorconfig`文件
为特定类型指定缩进大小、缩进类型(空格或 tab)，是否自动插入末行等。
{% asset_img 20181019154456.png  %}

```
# editorconfig.org


root = true

[*]
charset = utf-8
indent_size = 4
indent_style = space
insert_final_newline = true
trim_trailing_whitespace = true


[*.md]
trim_trailing_whitespace = false
```
