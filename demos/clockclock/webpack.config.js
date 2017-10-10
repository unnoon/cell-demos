path = require('path');

module.exports = {
    entry: path.join(__dirname, '/src/main.ts'),
    output: {
        filename: 'bin/bundle.js',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.jsx', 'json']
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    devtool: "source-map"
};