const merge = require('webpack-merge');
const parts = require('./webpack.parts');

const config = {
    entry: {
        app: './src/index.js',
        libs: ['react', 'react-dom', 'react-css-modules'],
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: false,
    resolve: {
        extensions: ['.js', '.jsx'],
    },
}

const prod = merge([
    parts.loadJS(),
]);


module.exports = merge(config, prod);