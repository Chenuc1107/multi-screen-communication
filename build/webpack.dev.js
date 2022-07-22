const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');
const paths = require("./paths");
module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: paths.demo,
    open: false
  }
});