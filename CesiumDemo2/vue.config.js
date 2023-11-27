const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.4.161:8080',// 后端接口
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          '/api': ''
        }
      }
    }
  }

  
})
