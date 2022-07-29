const path = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorWebpackPlugin = require("friendly-errors-webpack-plugin")
const WebpackBar = require('webpackbar')
const devServer = require('./devServer')
const packageConfig = require('../package.json')
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const ESLintPlugin = require('eslint-webpack-plugin')
module.exports = {
  entry: [path.examples + '/index.js'],
  module: {
    rules: [
      { test: /\.vue$/, use: ['vue-loader']},
      { test: /\.js$/, use: ['babel-loader'],
        exclude: /node_modules/},
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              esModule: false, // 这里设置为false
              outputPath: "images", // 指定图片输入的文件夹， 打包地址是 “/dist/images/图片名字”
              // publicPath: "images", // 指定获取图片的路径，即打包结果引入的地址是 "/images/图片名字"
              // limit  (如果小于 8K ，则转为base64，否则返回一个url地址)
              limit: 8192,
              name: "[name].[hash:8].[ext]" // 输入的图片名
            }
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        use: {
          loader: "file-loader",
          options: {
            esModule: false, // 这里设置为false
            outputPath: "./fonts/", // 指定图片输入的文件夹，打包地址是 “/dist/fonts/字体文件”
            // publicPath: "../", // 指定字体的路径，即打包结果引入的地址是 "/fonts/字体文件名"
          }
        }
      },
    ]
  },
  plugins: [
    new WebpackBar(),
    new VueLoaderPlugin(),
    new ESLintPlugin(),
    new HtmlWebpackPlugin({
      template: path.examples + '/index.html',
      filename: "index.html"
    }),
    new FriendlyErrorWebpackPlugin({
      compilationSuccessInfo: {
        messages: [`${packageConfig.name} 启动成功,服务地址： http://localhost:${devServer.port}`]
      }
    })
  ],
  resolve: {
    modules: [path.src, 'node_modules', path.examples],
    extensions: ['.js', '.jsx', '.json', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.src,
      '$exp': path.examples
    },
  }
};
