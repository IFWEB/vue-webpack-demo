var path = require('path'),

    webpack = require('webpack'),
    config = require('./webpack.base.conf'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

config.output.filename = '[name].[chunkhash].js';
config.output.chunkFilename = '[id].[chunkhash].js';

config.plugins.push(
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
);

// config.output.path = '/';

module.exports = config;