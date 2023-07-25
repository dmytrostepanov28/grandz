const path = require("path");
const miniCss = require("mini-css-extract-plugin");
const webpack = require("webpack");
module.exports = {
  watch: true,
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    filename: "scripts.bundle.js",
    path: path.resolve("./assets"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(s*)css$/,
        use: [miniCss.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
          },
        },
      },
    ],
  },
  plugins: [
    new miniCss({
      filename: "styles.css",
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      rivets: "rivets",
    }),
  ],
};
