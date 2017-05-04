var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './app.js',
  output: { path: __dirname, filename: 'bin/bundle.js' },
   resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
    },
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};