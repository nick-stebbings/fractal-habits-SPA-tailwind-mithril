const mode = process.env.NODE_ENV || 'development';

const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap({
  context: path.resolve(__dirname),
  entry: {
    index: "../index.js",
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].build.js",
    chunkFilename: "[name].build.js",
  },
  mode,
  resolve: {
    modules: [
      "ui/node_modules"
    ]
  },
  devtool: mode === "development" ? "cheap-module-eval-source-map" : false,
  plugins: [
    new webpack.ProvidePlugin({
      m: "mithril", // Global access
    }),
    new MiniCssExtractPlugin({ filename: "./bundle.[contenthash].css" }),
    new CleanWebpackPlugin({ verbose: true }),
    new OptimizeCssAssetsPlugin({}),
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
    }),
    new HtmlWebpackPlugin({
      template: "../index.html",
      filename: "index.html",
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  devServer: {
    open: true,
    hot: true,
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: ["html-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "img",
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
            loader: "css-loader?sourceMap", // translates CSS into CommonJS modules
          },
          {
            loader: "resolve-url-loader",
          },
          {
            loader: "postcss-loader", // Run post css actions
            options: {
              postcssOptions: {
                config: path.resolve(__dirname, "postcss.config.js"),
              },
            },
          },
          {
            loader: "sass-loader?sourceMap", // compiles Sass to CSS
          },
        ],
      },
      {
        test: /\.pcss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader", // Run post css actions
            options: {
              postcssOptions: {
                config: path.resolve(__dirname, "postcss.config.js"),
              },
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: { esModule: false },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader?cacheDirectory",
        },
      },
    ],
  },
});
