const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.join(__dirname, "build"),
    filename: "index.bundle.js",
    publicPath: "/",
  },
  mode: process.env.NODE_ENV || "development",
  resolve: { modules: [path.resolve(__dirname, "src"), "node_modules"] },
  devServer: {
    static: path.join(__dirname, "src"),

    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
    new Dotenv(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
};
