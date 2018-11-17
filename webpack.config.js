const path = require('path');
// plugins
const ClearWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
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
    new ClearWebpackPlugin(['dist']),
    new webpack.HotModuleReplacementPlugin()
  ]
};