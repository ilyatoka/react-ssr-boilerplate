const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const srcPath = path.resolve(__dirname, "src");
const buildPath = path.resolve(__dirname, "build");

const cleanWebpackPlugin = new CleanWebpackPlugin(["build"]);

const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: "[name].[hash].css",
  chunkFilename: "[id].[hash].css"
});

module.exports = {
  context: srcPath,
  target: "web",
  mode: "development",

  entry: {
    client: `${srcPath}/client/index.jsx`
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

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
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
