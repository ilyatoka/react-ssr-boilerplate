const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: "[name].[hash].css",
  chunkFilename: "[id].[hash].css"
});

const cleanWebpackPlugin = new CleanWebpackPlugin(["build"]);

module.exports = {
  mode: "development",

  entry: {
    main: "./src/index.jsx"
  },

  output: {
    path: path.resolve(__dirname, "build/bundle"),
    filename: "[name].[hash].js"
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

  plugins: [miniCssExtractPlugin, cleanWebpackPlugin]
};
