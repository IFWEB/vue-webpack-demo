var fs = require('fs'),
    webpack = require('webpack'),
    config = require('./config'),
    prodConfig = require('./webpack.prod.conf');

// fs.emptyDirSync(config.assetsRoot); // 清空 build 目录

console.log(prodConfig);

webpack(prodConfig, function(err, stats) {
    stats.toString({ chunks: false, color: true });
});



