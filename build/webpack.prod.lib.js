const paths = require('./paths')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackBar = require("webpackbar");
const {VueLoaderPlugin} = require("vue-loader");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: "production",
  devtool: false,
  entry: [paths.src + '/index.js'],
  output: {
    clean: true,
    path: paths.lib,
    filename:  (pathData) => {
      return pathData.chunk.name === 'main' ? 'index.js' : 'js/[name].js';
    }
  },
  module: {
    rules: [
      { test: /\.vue$/, use: ['vue-loader']},
      { test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/},
      {
        test: /\.(sass|scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: {  importLoaders: 2, sourceMap: false, modules: false,}},
          'postcss-loader', 'sass-loader',
        ],
      },
      // Images: Copy image files to build folder
      { test: /\.(?:ico|gif|png|jpg|jpeg|svg|)$/,
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
      { test: /\.(woff(2)?|eot|ttf|otf|)$/,
        type: 'asset',
        generator: {
          filename: 'assets/font/[name].[hash:6][ext]',
          publicPath: './'
        }
      }
    ],
  },
  // Customize the webpack build process
  plugins: [
    new WebpackBar(),
    new VueLoaderPlugin(),
    // Extracts CSS into separate files
    new MiniCssExtractPlugin({
      filename: 'assets/styles/app.css',
      chunkFilename: 'static/styles/[id].css',
    }),
  ],
  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': paths.src
    },
  },
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
}