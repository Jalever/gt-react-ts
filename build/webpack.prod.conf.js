const path = require('path')
const { merge} = require('webpack-merge')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const baseConfig = require('./webpack.base.conf')

module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    publicPath: './',
  },
  module: {
    rules: [
      // {
      //   test: /\.less$/,
      //   use: [
      //     MiniCssExtractPlugin.loader,
      //     'css-loader',
      //     'postcss-loader',
      //     'less-loader',
      //   ],
      // },
    ],
  },
  plugins: [
    // new CleanWebpackPlugin(),
  ],
})
