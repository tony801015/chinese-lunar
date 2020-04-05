const path = require('path');

module.exports = {
  target: 'node',
  entry: {
    index: './index.js',
  },
  output: {
    path: path.join(__dirname),
    filename: 'main.js',
    libraryTarget: 'commonjs2',
  },
  module: { //設定你的檔案選項
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
    ],
  },
  mode: 'production'
};
