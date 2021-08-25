module.exports = {
    runtimeCompiler: true,
    publicPath: './',
    // 设为false打包时不生成.map文件
    productionSourceMap: false,
    css: {
      loaderOptions: {
        css: {},
        postcss: {
          plugins: [
            require('postcss-px2rem')({
              remUnit: 37.5,
            }),
          ],
        },
      },
    },
    devServer: {
      open: false,
      proxy: {
        '/api': {
          target: 'https://id-beta.tlab.fun/', // 测试
          changeOrigin: true, // 是否允许跨越
          secure: true// 解决https安全问题
        }
      }
    },
    productionSourceMap: false,
    configureWebpack: {
      resolve: {
        // 配置路径别名
        // alias: {
        //   "@": "src"
        // },
      },
    },
  }