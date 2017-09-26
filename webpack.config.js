require("image-webpack-loader");
var path = require('path');


// var config = {
//   entry: './main.js',
//   output: {
//     filename: 'index.js',
//   },

var config = {
      entry: path.resolve(__dirname, 'src') + '/app/main.js',
      output: {
          path: path.resolve(__dirname, 'dist') + '/app',
          filename: 'bundle.js',
          publicPath: '/app/'
    },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: '/node_modules/',
        loader: 'babel-loader',
        query: {
          presets: ["env", 'es2015', 'react'],
        }
      },
      {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        query: {
          // Inline images smaller than 10kb as data URIs
          limit: 10000
        }
      }
    ]
  }
}

module.exports = config;
