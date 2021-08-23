// vite.config.js
const { resolve } = require('path')

module.exports = {
  // 打包配置
  build: {
    rollupOptions: {
      // 打包入口
      input: {
        index: resolve(__dirname, 'index.html'),
        home: resolve(__dirname, 'home.html'),
        about: resolve(__dirname, 'about.html'),
        posts: resolve(__dirname, 'posts.html'),
        categories: resolve(__dirname, 'categories.html'),
        tags: resolve(__dirname, 'tags.html'),
      },
      // 输出
      output: {
        entryFileNames: `static/js/[name].js`, // 入口
        chunkFileNames: `static/js/[name].js`, // 块资源
        assetFileNames: `static/[ext]/[name].[ext]`, // 资源
        // globals: {
        //   vue: 'Vue'
        // }
      },
      // external: ['vue']
    },
    // 设置打包静态文件输出目录名称
    assetsDir: 'static'
  }
}