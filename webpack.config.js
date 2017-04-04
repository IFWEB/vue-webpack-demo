var webpack = require('webpack');

module.exports = { 
  entry: { app: './src/app.js', vendor: [ 'vue' ] },
  output:
   { path: '/Users/liyicheng/workspace/vuejs/demo/dist',
     filename: '[name].[chunkhash].js',
     publicPath: 'static/',
     chunkFilename: '[id].[chunkhash].js' },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
  ]
}