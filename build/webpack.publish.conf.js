var path = require('path');
var utils = require('./utils');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    path: './',
    filename: 'vue-material.js',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'utils': path.resolve(__dirname, '../utils'),
      'directives': path.resolve(__dirname, '../directives'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.html$/,
      loader: 'vue-html'
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'url',
      query: {
        limit: 10000,
        name: '[name].[ext]?[hash]'
      }
    }]
  },
  vue: {
    loaders: utils.cssLoaders(),
    autoprefixer: {
      browsers: ['last 2 versions', 'ie > 8', 'Firefox ESR']
    }
  },
  babel: {
    presets: ['es2015', 'stage-2'],
    plugins: ['transform-runtime'],
    comments: false
  },
}

config.plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),

  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),

  new webpack.optimize.OccurenceOrderPlugin()
];

module.exports = config;
