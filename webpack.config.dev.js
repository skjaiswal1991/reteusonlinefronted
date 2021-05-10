const webpack = require("webpack");
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

process.env.NODE_ENV = "development"; // for bable plugins;

module.exports = {
  mode: "development", // this disable some production only dependancies and make node awrare only for development
  target: "web", // will make awayer that we are building for web
  devtool: "cheap-module-source-map", // recommended for debugging
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "build"), // where we need to put files but in dev only in memory
    publicPath: "/", // public paths
    filename: "bundle.js", // name of after build file
  },
  //you can use any express server for that but we are using this for easyness
  devServer: {
    stats: "minimal", // this is for minimum dirt in console
    overlay: true, // show errors on screen,
    historyApiFallback: true, // to make all deep link to point at the index.js
    disableHostCheck: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    }, // for the CORS issue
    https: false, // disable for the moments
  },
  // we are writing a plugin here as we offcourse we wanna transpile the ndex.html and other htmls, (plugin works at the
  // end of bundle generations rigth in the life cycle of webpack with hooks unlike loader how works before and during the
  // bundeling and have more power then a loader.)
  //loader works on file lable and plugins are the obeject and can works profile levels
  plugins: [
    new HTMLWebpackPlugin({
      template: "src/index.html",
      favicon: "src/favicon.ico",
    }),
  ],
  // here we are educating the webpack wich files we are gonna uses
  module: {
    // this is the way to apply rules.
    rules: [
      //first rule is for the javaScript
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      // test for css
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.woff(\d*)\??(\d*)$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff",
      },
      {
        test: /\.ttf\??(\d*)$/,
        loader: "file-loader",
      },
      {
        test: /\.eot\??(\d*)$/,
        loader: "file-loader",
      },
      // {
      //   test: /\.svg\??(\d*)$/,
      //   loader: "file-loader",
      // },
      // {
      //   test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
      //   loader: "url-loader?limit=100000",
      // },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: false,
              esModule: false,
            },
          },
        ],
      },
    ],
  },
};
