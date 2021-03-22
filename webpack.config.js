const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'build.js',
  },
  plugins: [
    new webpack.ProvidePlugin({
      m: 'mithril', // Global access
    }),
    new MiniCssExtractPlugin({ filename: 'bundle.css' }),
    new CleanWebpackPlugin({ verbose: true }),
    new ESLintPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
  optimization: {
    minimize: false,
    // minimizer: [new TerserPlugin()],
  },
  devServer: {
    open: true,
    hot: true,
    contentBase: '/',
    // Send API requests on localhost to API server
    // proxy: {
    //   "/api": {
    //     target: {
    //       host: "0.0.0.0",
    //       protocol: "http:",
    //       port: 3000,
    //     },
    //     pathRewrite: {
    //       // '^/api': ''
    //     },
    //   },
    // },
    // headers: {
    //   "Access-Control-Allow-Origin": "*",
    // },
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: ['html-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img',
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.(sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader?sourceMap', // translates CSS into CommonJS modules
          },
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: 'postcss-loader', // Run post css actions
            options: {
              postcssOptions: {
                config: path.resolve(__dirname, 'postcss.config.js'),
              },
            },
          },
          {
            loader: 'sass-loader?sourceMap', // compiles Sass to CSS
          },
        ],
      },
      {
        test: /\.pcss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader', // Run post css actions
            options: {
              postcssOptions: {
                config: path.resolve(__dirname, 'postcss.config.js'),
              },
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: { esModule: false },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader?cacheDirectory',
        },
      },
    ],
  },
};
