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

### 技术
* 使用了`redux`对数据状态进行管理
* 封装`axios`发送数据请求、内置
* 用`locales`插件实现了国际化
* 用`js-cookies`完成了项目数据的本地存储
* 使用`AES`对数据请求进行加密
* 使用`token`对用户进行判断
* 用`react-svg`对svg图标进行封装，能够支持svg图标动态引入

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
