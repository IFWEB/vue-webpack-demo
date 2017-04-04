var path = require('path'),

    config = require('./config');

module.exports = {
    entry: {
        app: './src/app.js',
        vendor: ['vue', 'vue-router']
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
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': path.resolve(__dirname, '../src'),
            vue: 'vue/dist/vue.js'
        }
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: '/dist'
    },
    plugins: []
};