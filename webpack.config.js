const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/app.js",
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
  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: ["html-loader"],
      },
      {
        test: /icons\/.*\.(svg|png)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: "url-loader",
          },
        ],
      },
      {
        test: /images\/.*\.(svg|png)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "url-loader",
            options: {
              query: {
                name: "[name].[ext]",
              },
            },
          },
          {
            loader: "image-webpack-loader",
            options: {
              query: {
                mozjpeg: {
                  progressive: true,
                },
                gifsicle: {
                  interlaced: true,
                },
                optipng: {
                  optimizationLevel: 7,
                },
              },
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
          {
            loader: "css-loader", // translates CSS into CommonJS modules
          },
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
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  watch: true,
};
