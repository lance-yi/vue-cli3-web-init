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


### 采坑指南

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
