module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "index.js", // 需要跟你在src文件夹中导出文件的文件名一致
    globalObject: "this",
    libraryTarget: "umd", //支持库的引入方式
    library: "myLib", // 库的名称
  },
  devServer: {
    publicPath: "/dist",
  },
};
