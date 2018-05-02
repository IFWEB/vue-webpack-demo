var path = require('path'),

    config = require('./config');

module.exports = {
    entry: {
        app: './src/main.js',
        vendor: ['vue', 'vue-router']
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': path.resolve(__dirname, '../src'),
            vue: 'vue/dist/vue.js'
        }
    },
    module: {
        /*loaders: [
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]*/

        loaders: [
            {
              test: /\.vue$/,
              loader: 'vue-loader'
            }
        ]
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: '/dist'
    },
    plugins: []
};