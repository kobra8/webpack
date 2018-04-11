var path = require('path');

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
                test: /\.csv$/,
                exclude: /node_modules/,
                use: [
                    'to-string-loader',
                    {
                        loader: 'csv-loader',
                        options: {
                            header: true,
                        }
                    }
                ],
            }
        ]
    }
}