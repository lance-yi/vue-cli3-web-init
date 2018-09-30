# web-spa-init

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## 功能说明

- 使用vue-rooter路由
- 使用vuex状态管理
- 使用iview UI组件 
- 使用less预编译插件
- 使用babel es6转换插件
- 使用eslint语法检测
- 对iview 主题定制 在my-theme文件下中，默认变量参考 [https://github.com/iview/iview/blob/2.0/src/styles/custom.less](https://github.com/iview/iview/blob/2.0/src/styles/custom.less)
- 路由切换添加顶部loading效果
- 封装axios库，针对不同服务器，请求方式进行了简单的封装，直接在 `main.js` 全局注册到 `vue.prototype` 下,组件直接通过 `this` 访问


## 采坑指南

- **iview自定义主题导入样式不能编译**
```
// 在vue.config.js开启JavaScript
module.exports = {
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true,
            }
        }
    },
}
```
