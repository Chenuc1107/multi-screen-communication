const merge = require('webpack-merge');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('./paths');
const baseConfig = require('./webpack.base.config');
module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'inline-source-map',
  output:{
    path: path.demo,
    publicPath: './',
    filename: 'js/[name].[hash:6].js'
  },
module: {
    rules:[
      {
        test: /\.(sass|scss|css)$/,
        use:[
          {loader: MiniCssExtractPlugin.loader, options: { publicPath:'../' }},
          { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1, modules: false } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ]
      }
    ]
},
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: './styles/[name].[hash:6].css',
      chunkFilename: './styles/[id].css',
    }),
  ]
});
