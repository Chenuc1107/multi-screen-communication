const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const paths = require('./paths')
const common = require('./webpack.config')

module.exports = merge(common,  {
  mode: 'production',
  devtool: false,
  output: {
    clean: true,
    path: paths.demo,
    publicPath: '/',
    filename: 'js/[name].[contenthash].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: {  importLoaders: 2, sourceMap: false, modules: false,}},
          'postcss-loader', 'sass-loader',
        ],
      },

      // Images: Copy image files to build folder
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024
          }
        },
        generator: {
          filename: 'assets/images/[name].[hash:6][ext]',
          publicPath: './'
        }
      },

      // Fonts and SVGs: Inline files
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset',
        generator: {
          filename: 'assets/font/[name].[hash:6][ext]',
          publicPath: './'
        }
      }
    ],
  },
  plugins: [
    // Extracts CSS into separate files
    new MiniCssExtractPlugin({
      filename: 'assets/styles/[name].[contenthash].css',
      chunkFilename: 'assets/styles/[id].css',
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), '...'],
    runtimeChunk: {
      name: 'runtime',
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  }
})
