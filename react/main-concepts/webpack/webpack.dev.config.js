var path = require('path');

var parentDir = path.join(__dirname, '../');

module.exports = {
	entry: [
		path.join(__dirname, '../index.js')
    ],
    mode: 'development',
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    output: {
        path: parentDir,
        filename: 'bundle.js'
    },
    devtool: 'eval-source-map'
}