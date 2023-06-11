var path = require("path");

module.exports = {
  entry: "./src/entry.js",
  output: {
    // path 需要绝对路径
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  module: {
    // webpack 2.0 之后不使用loaders, 使用rules
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
      },
    ],
  },
};
