const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const srcPath = path.resolve(__dirname, "src");
const distPath = path.resolve(__dirname, "dist/client");

const cleanWebpackPlugin = new CleanWebpackPlugin(["dist/client"]);

const htmlWebpackPlugin = new HTMLWebpackPlugin({
  template: `${srcPath}/client/index.html`
});

module.exports = {
  context: srcPath,
  target: "web",
  mode: "production",

  entry: {
    client: `${srcPath}/client/index.jsx`
  },

  output: {
    path: distPath,
    filename: "[name].js",
    publicPath: "/assets/",
    chunkFilename: "client.[id].js"
  },

  resolve: {
    modules: ["node_modules", "src"],
    extensions: ["*", ".js", ".jsx", ".json"]
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
          filename: "vendor.js"
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
          "style-loader",
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

  plugins: [cleanWebpackPlugin, htmlWebpackPlugin]
};
