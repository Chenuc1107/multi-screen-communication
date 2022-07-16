const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackBar = require('webpackbar')
const paths = require('./paths')
const {VueLoaderPlugin} = require("vue-loader");

module.exports = {
  // Where webpack looks to start building the bundle
  entry: [paths.examples + '/index.js'],
  // Determine how modules within the project are treated
  module: {
    rules: [
      { test: /\.vue$/, use: ['vue-loader']},
      // JavaScript: Use Babel to transpile JavaScript files
      { test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/},
    ],
  },
  // Customize the webpack build process
  plugins: [
    new WebpackBar(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'examples',
      template: paths.examples + '/index.html', // template file
      filename: 'index.html', // output file
    })
  ],
  context: paths.context,
  resolve: {
    modules: [paths.src, 'node_modules', paths.examples],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@/': paths.src,
      assets: paths.public,
    },
  }
}
