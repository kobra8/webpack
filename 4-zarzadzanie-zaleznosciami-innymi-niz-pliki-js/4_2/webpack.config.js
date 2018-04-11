var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var mobileCSS = new ExtractTextPlugin('mobile.css');
var desktopCSS = new ExtractTextPlugin('desktop.css');

var confCSS = {
    use: {
        loader: 'css-loader',
        options: {
            sourceMap: true,
            minimize: true,
            import: false,
        }
    }
};

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    watch: true,
    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /mobile\.css$/,
                use: mobileCSS.extract(confCSS),
            },
            {
                test: /desktop\.css$/,
                use: desktopCSS.extract(confCSS)
            }
        ]
    },

    plugins: [
        mobileCSS,
        desktopCSS,
    ]
}