var path = require('path');
var webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'es6/modules/app.js'),
    context: path.resolve(__dirname, 'es6/modules'),
    output: {
         path: `/home/sid/workspace/learning/js/es6/modules/build`,
         filename: 'app.bundle.js'
     },
     module: {
         rules: [
             {
                 test: /\.js$/,
                 loader:{
                    loader: 'babel-loader'
                 }
             }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
};
