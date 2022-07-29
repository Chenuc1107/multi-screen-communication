const merge = require('webpack-merge');
const devServer = require('./devServer')
const baseConfig = require('./webpack.base.config');
module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer,
  stats:'errors-warnings',
  module: {
    rules:[
      {
        test: /\.(sass|scss|css)$/,
        use: [ 'vue-style-loader',
          { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1, modules: false } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      }
    ]
  }
});
