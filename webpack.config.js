const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const srcPath = path.resolve(__dirname, "src");
const buildPath = path.resolve(__dirname, "build");

const commonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin({
  name: 'vendor',
  minChunks: Infinity,
}),

const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: "[name].[hash].css",
  chunkFilename: "[id].[hash].css"
});

const cleanWebpackPlugin = new CleanWebpackPlugin(["build"]);

module.exports = {
  context: srcPath,
  target: "web",
  mode: "development",

  entry: {
    main: `${srcPath}/client/index.jsx`,
    vendor: ["react", "react-dom", "react-router-dom", "prop-types"]
  },

  output: {
    path: buildPath,
    filename: "[name].[hash].js",
    publicPath: "/assets/"
  },

  resolve: {
    modules: ["node_modules", "src"],
    extensions: [".js", ".jsx"]
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              camelCase: true,
              localIdentName: "[name]__[local]__[hash:base64:5]"
            }
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },

  plugins: [miniCssExtractPlugin, cleanWebpackPlugin, commonsChunkPlugin]
};
