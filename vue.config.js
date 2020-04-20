/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const pages = require('webpack-get-pages-config')
const px2rem = require('postcss-pxtorem')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  pages,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          px2rem({
            rootValue: 32,
            propList: ['*']
          })
        ]
      },
      less: {
        modifyVars: {
          hack: `true; @import "${path.join(__dirname, './src/styles/var.less')}";`
        }
      }
    }
  },
  configureWebpack: {
    devtool: isDev ? 'cheap-module-eval-source-map' : 'none',
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendors: {
            name: 'chunk-vendors',
            test: /vue|axios|rem\.[tj]s/,
            priority: -10,
            chunks: 'initial'
          },
          common: {
            name: 'chunk-common',
            minChunks: 5,
            priority: -20,
            chunks: 'initial',
            reuseExistingChunk: true
          }
        }
      }
    },
    plugins: [
      new CompressionWebpackPlugin({
      // 正在匹配需要压缩的文件后缀
        test: /\.(js|css|svg|woff|ttf|json)$/,
        // 大于10kb的会压缩
        threshold: 10240
      // 其余配置查看compression-webpack-plugin
      })
    ]
  }
}
