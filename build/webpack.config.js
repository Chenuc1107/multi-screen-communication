const paths = require('./paths')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry:[paths.examples + '/index.js'],
  output: {
    path: paths.demo,
    filename: '[name].[hash].js'
  },
  module: {
    rules: [

    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.template + 'index.html'
    })
  ]
};