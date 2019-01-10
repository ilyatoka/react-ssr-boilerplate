const path = require("path");
const nodeExternals = require("webpack-node-externals");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const srcPath = path.resolve(__dirname, "src");
const distPath = path.resolve(__dirname, "dist/server");

const cleanWebpackPlugin = new CleanWebpackPlugin(["dist/server"]);

const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: "server.css",
  chunkFilename: "server.[id].css"
});

module.exports = {
  context: srcPath,
  target: "node",
  mode: "production",

  entry: {
    server: `${srcPath}/server/index.js`
  },

  output: {
    path: distPath,
    filename: "[name].js",
    publicPath: "/assets/",
    chunkFilename: "server.[id].js"
  },

  node: {
    __dirname: false,
    __filename: false
  },

  resolve: {
    modules: ["node_modules", "src"],
    extensions: ["*", ".js", ".jsx", ".json"]
  },

  optimization: {
    minimize: false
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "env",
              {
                targets: {
                  node: 11
                }
              }
            ]
          ]
        }
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

  externals: nodeExternals(),

  plugins: [cleanWebpackPlugin, miniCssExtractPlugin]
};
