const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.tsx"),
  output: {
    path: path.join(__dirname, "build"),
    filename: "index.bundle.js",
    publicPath: "/",
  },
  mode: process.env.NODE_ENV || "development",
  resolve: {
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
  ],
};
