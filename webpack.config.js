const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "build.js",
    publicPath: "/",
  },
  plugins: [
    new webpack.ProvidePlugin({
      m: "mithril", //Global access
    }),
    new MiniCssExtractPlugin({ filename: "bundle.css" }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
  devServer: {
    // open: true,
    hot: true,
    contentBase: "/",
    // Send API requests on localhost to API server
    proxy: {
      "/api": {
        target: {
          host: "0.0.0.0",
          protocol: "http:",
          port: 9292,
        },
        pathRewrite: {
          // '^/api': ''
        },
      },
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
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
          loader: "babel-loader",
        },
      },
    ],
  },
};
