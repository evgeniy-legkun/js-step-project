const path = require('path');
// plugins
const ClearWebpackPlugin = require('clean-webpack-plugin');
require("@babel/polyfill");

module.exports = {
  mode: 'development',
  entry: ["@babel/polyfill", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: [{
        loader: 'babel-loader'
      }]
    }]
  },
  // watcher
  watchOptions: {
    ignored: /node_modules/
  },
  plugins: [
    new ClearWebpackPlugin(['dist'])
  ]
};