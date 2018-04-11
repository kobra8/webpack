var path = require('path');

var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var FileManagerPlugin = require('filemanager-webpack-plugin');

var csvPeople = new ExtractTextPlugin('data-people.csv');
var csvOrders = new ExtractTextPlugin('data-orders.csv');

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
                test: /people\.csv$/,
                //use: ['to-string-loader','csv-loader']
                use: csvPeople.extract({
                    use: ['to-string-loader', 'csv-loader'],
                })
            }, 
            {
                test: /orders\.csv$/,
                use: csvOrders.extract({
                    use: ['to-string-loader', 'csv-loader'],
                })
            }
        ]
    },

    plugins: [
        //new UglifyJSPlugin(),
        csvPeople,
        csvOrders,
        new FileManagerPlugin({
            onStart: {
                delete: [
                  path.join(__dirname, 'dist', '*'),  
                ]
            },
            onEnd: {
                copy: [
                    {
                        source: path.join(__dirname, 'dist', 'bundle.js'),
                        destination: path.join(__dirname, 'main.js'),
                    } 
                ]
            }
        }),
    ]
}