var path = require('path'),

    webpack = require('webpack'),
    config = require('./webpack.base.conf'),
    HtmlWebpackPlugin = require('html-webpack-plugin');



config.plugins.push(
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, '../src/index.html')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('dev')
        }
    })
);

config.output.publicPath = '/';
// config.output.path = '/';

module.exports = config;