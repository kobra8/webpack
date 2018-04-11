var path = require('path');

var webpack = require('webpack');
var glob = require('glob');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HTMLPlugin = require('html-webpack-plugin');
var CleanPlugin = require('clean-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var PurifyCSSPlugin = require('purifycss-webpack');

module.exports = {
    entry: [
        //'react-hot-loader/patch',
        './src/index.js'
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    //watch: true,
    devtool: false,
    resolve: {
        extensions: ['.js', '.jsx'],
    },

    devServer: {
        port: 9001,
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
                                    localIdentName: '[name]__[local]--[hash:base64:5]-purify',
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
            nimify: {},
        }),

        //new webpack.NamedModulesPlugin(),
        //new webpack.HotModuleReplacementPlugin(),

        // new BrowserSyncPlugin({
        //     host: 'localhost',
        //     port: 9100,
        //     proxy: 'http://localhost:9001',
        // }, {
        //     reload: false,
        // })

        new PurifyCSSPlugin({
            paths: glob.sync(path.join(__dirname, '/src/**/*.(js|jsx)'), {nodir: true}),
            purifyOptions: {
                whitelist: ['*purify*'],
                minify: true,
            }
        })
    ]
}