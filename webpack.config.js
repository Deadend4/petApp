const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpack = require("webpack");
const { default: _default } = require("@storybook/addon-interactions");
const envPath = path.resolve(__dirname, ".env");
const envVars = require("dotenv").config({ path: envPath }).parsed || {};
module.exports = {
  entry: path.join(__dirname, "src", "index.tsx"),
  output: {
    path: path.join(__dirname, "build"),
    filename: "index.bundle.js",
    publicPath: "/",
  },
  mode: process.env.NODE_ENV || "development",
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "./assets/"),
      src: path.resolve(__dirname, "./src/"),
      components: path.resolve(__dirname, "./src/components/"),
      context: path.resolve(__dirname, "./src/context/"),
      hooks: path.resolve(__dirname, "./src/hooks/"),
      router: path.resolve(__dirname, "./src/router/"),
      svg: path.resolve(__dirname, "./src/svg/"),
      types: path.resolve(__dirname, "./src/types/"),
      utils: path.resolve(__dirname, "./src/utils/"),
      database: path.resolve(__dirname, "./database/"),
    },
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    extensions: [".tsx", ".ts", ".js", ".jsx", ".css", ".scss"],
  },
  devServer: {
    historyApiFallback: true,
    static: { directory: path.join(__dirname, "src") },
    port: 3000,
  },
  stats: {
    children: true,
  },
  ignoreWarnings: [
    {
      module: /module2\.js\?[34]/, // A RegExp
    },
    {
      module: /[13]/,
      message: /homepage/,
    },
    /warning from compiler/,
    (warning) => true,
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(css|scss)$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { modules: true } },
          {
            loader: "sass-loader",
            options: { implementation: require("sass") },
          },
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(path.resolve(__dirname, "public"), "index.html"),
      favicon: path.join(path.resolve(__dirname, "public"), "favicon.ico"),
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(envVars),
    }),
  ],
};
