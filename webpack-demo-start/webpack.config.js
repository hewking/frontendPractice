const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  entry: {
    index: {
        import: './src/index.js',
        dependOn: 'shared'
    },
    another: {
        import:'./src/another-module.js',
        dependOn: 'shared'
    },
    shared: 'lodash',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
};