# React Umi admin

`react-ant-admin`是一个综合后台前端解决方案，基于 `React`和`umi`实现，整合了常用的业务，使用了最新的`react`周边技术栈。提炼了典型的业务模型，提供了丰富的功能组件，它可以帮助你快速搭建企业级中后台产品原型。

[在线预览](https://bujidao.github.io/react-ant-admin-1.0/#/login)

## 项目介绍

项目正在研发中，目前能提供的有：

### 功能
* 登录
* 国际化
* 根据用户账号权限动态获取菜单
* 动态渲染目录
* `markdown`文件内容加载
* 数据加密请求
* 界面水印功能
* 点击复制到剪切板
* `pdf`上传和预览
* `excel`上传和预览
* 导出table数据为excel并下载
* 动态渲染table

### 技术
* 使用了[redux](https://github.com/reduxjs/redux)对数据状态进行管理
* 封装[axios](https://github.com/axios/axios)，统一管理请求地址，并对请求和响应进行拦截
* 用内置`locales`插件实现了国际化
* 用[js-cookies](js-cookies)完成了项目数据的本地存储
* 使用[AES](https://github.com/brix/crypto-js)对数据请求进行加密
* 使用`token`对用户进行判断
* 使用[screenfull](https://github.com/sindresorhus/screenfull.js)实现页面全屏的功能
* 用[react-svg](https://github.com/tanem/react-svg)对svg图标进行封装，能够支持svg图标动态引入
* 用[copy-to-clipboard](https://github.com/sudodoki/copy-to-clipboard#readme)封装了点击复制到剪切板的方法
* 使用[xlsx](https://github.com/SheetJS/sheetjs)实现了excel的上传预览
* 使用[react-html-table-to-excel](https://github.com/zsusac/ReactHTMLTableToExcel)实现了导出table数据到excel的功能
* 使用[react-pdf](https://github.com/wojtekmaj/react-pdf)实现了预览pdf的功能

### UI风格
* 登录界面使用了2021年度最热最火的`Neumorphism`风格
* 功能、布局参照了`vue`社区有名的[`vue-element-admin`](https://github.com/PanJiaChen/vue-element-admin)风格

## 开始项目

安装依赖

```bash
$ yarn
```

运行服务

```bash
$ yarn start
```

打包程序

```bash
$ yarn build
```
