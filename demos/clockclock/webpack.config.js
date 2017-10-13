path = require('path');

module.exports = {
    entry: path.join(__dirname, '/src/main.ts'),
    output: {
        filename: 'bin/bundle.js',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['.css', '.js', '.ts', '.tsx', '.jsx', 'json']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.css$/,
                include: /node_modules\/normalize\.css/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    { loader: 'file-loader' }
                ]
            }
        ]
    },
    devtool: "source-map"
};