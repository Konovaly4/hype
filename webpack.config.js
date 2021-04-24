const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  target: "web",
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  devServer: {
    hot: true,
    compress: true,
    port: 8080,
    liveReload: true,
    static: true,
    static: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: { loader: "babel-loader" },
        exclude: /node_modules/
      },
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", 
            options: {
              sourceMap: true,
            },
          },
          // { loader: 'css-loader', options: { url: false } },
          { loader: "postcss-loader" },
          { loader: "resolve-url-loader",
            options: {
              sourceMap: true,
              engine: "rework",
              root: "",
            },
          },
          { loader: "sass-loader", 
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
      inject: false,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css'
  }),
  ]
}