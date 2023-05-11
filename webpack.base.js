const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const resolve = (...paths) => path.resolve(__dirname, ...paths);

const config = {
  context: resolve('src'),
  entry: {
    main: resolve('src', 'index'),
  },
  output: {
    assetModuleFilename: 'assets/[name].[hash][ext]',
    clean: true,
    filename: 'js/[name].[hash].js',
  },
  plugins: [
    new ESLintPlugin({ fix: true }),
    new MiniCssExtractPlugin({ filename: 'css/[name].[hash].css' }),
    new HTMLWebpackPlugin({
      template: resolve('src', 'template'),
      title: '🌼',
      chunks: ['main'],
      inject: true,
      hash: false,
      favicon: resolve('public', 'favicon.png'),
    }),
  ],
  module: {
    rules: [
      { test: /\.(js|jsx)$/i, loader: 'babel-loader' },
      { test: /\.scss$/i, use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'] },
      { test: /\.(png)$/i, type: 'asset' },
    ],
  },
  resolve: { extensions: ['.js', '.json', '.scss', '.html'] },
  target: 'web',
};

module.exports = { resolve, config };
