var path = require('path');

var webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HTMLPlugin = require('html-webpack-plugin');
var CleanPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        './src/index.js'
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    //watch: true,
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx'],
    },

    devServer: {
        port: 9000,
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
        overlay: true,
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: ['extracted-loader'].concat(ExtractTextPlugin.extract({
                    publicPath: './../',
                    use:
                        [
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true,
                                    modules: true,
                                    localIdentName: '[name]__[local]--[hash:base64:5]',
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    plugins: (loader) => [
                                        new require('autoprefixer')(),
                                    ],
                                    sourceMap: true,
                                }
                            },
                            {
                                loader: 'resolve-url-loader',
                                options: {
                                    sourceMap: true,
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true,
                                }
                            }
                        ]
                })),
            },
            {
                test: /\.(jpg|jpeg|gif|png)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name].[ext]',
                    }
                }
            },
            {
                test: /\.(woff|woff2)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 30000,
                        name: 'fonts/[name].[ext]',
                    }
                }
            },
            {
                test: /\.html$/,
                use: [
                
                    {
                        loader: 'html-loader',
                        options: {
                            attrs: ['img:src'],
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new CleanPlugin('dist'),
        new ExtractTextPlugin('css/style.css'),
        new HTMLPlugin({
            filename: 'index.html',
            template: './src/index.html',
        }),

        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ]
}