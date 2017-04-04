var express = require('express'),
    webpack = require('webpack'),
    config = require('./config'),
    devConfig = require('./webpack.dev.conf.js'),

    app = new express(),
    compiler = webpack(devConfig);


app.use('/static', express.static(config.dev.assetsSubDirectory));

// serve webpack bundle output
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: false,
    index: "index.html",
    publicPath: devConfig.output.publicPath
}));

// app.use(require('webpack-hot-middleware')(compiler));

app.listen(3000, function() {
    console.log('listen to 3000');
})