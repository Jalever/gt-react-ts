const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

// const VueLoaderPlugin = require('vue-loader/lib/plugin')
// const AutoDllPlugin = require('autodll-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/main.tsx'),
  },
  output: {
    filename: 'js/[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
    // publicPath: isDev? '/':'/assessment/',
  },
  module: {
    rules: [
      {
        test: /\.(tsx?|js)$/,
        loader: 'babel-loader',
        options: { cacheDirectory: true },
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/, 
        loader: 'awesome-typescript-loader'
      },
      {
        // css-loader(处理我们的css，主要负责解析 @import这种语法的)
        // style-loader 它是把 css 插入到 head 的标签中
        // loader的特点： 希望单一性（一个loader处理一件事情）
        // loader 的用法 ：一个 loader 用字符串表示，多个loader 需要用 []表示
        // loader 的顺序，默认是从右向左执行 从下到上执行
        // loader 还可以写成对象的方式，可以传参数
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false,
              sourceMap: true,
              importLoaders: 1, // 需要先被 less-loader 处理，所以这里设置为 1
            },
          },
          
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      filename: path.resolve(__dirname, '../dist/index.html'),
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: path.resolve(__dirname, '../tsconfig.json'),
      },
    }),
  ],
  /**
   * key: 作为import xx from "yyy";
   * value: 作为全局对象,挂载在window上
   */
  externals: {
    
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      "@": path.resolve(__dirname, "../src"),
      "@request": path.resolve(__dirname, "../src/request"),
      "@components": path.resolve(__dirname, "../src/components"),
      "@constants": path.resolve(__dirname, "../src/constants"),
      "@store": path.resolve(__dirname, "../src/store"),
    }
  },
}
