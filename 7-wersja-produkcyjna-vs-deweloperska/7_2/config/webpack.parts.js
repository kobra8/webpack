const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

exports.loadJS = ({
    test = /\.(js|jsx)$/,
    exclude = /node_modules/,
} = {}) => {

    return {
        module: {
            rules: [
                {
                    test,
                    exclude,
                    use: 'babel-loader'
                }
            ]
        }
    }
}

exports.loadSCSS = ({
        extractOptions = {
            filename: 'css/[chunkhash].css',
            allChunks: true,
        }
    } = {}) => {

    return {
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    exclude: /node_modules/,
                    use: ExtractTextPlugin.extract({
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
                    }),
                }
            ]
        },

        plugins: [
            new ExtractTextPlugin(extractOptions),
        ]
    }
}

exports.loadImages = ({
        fileOptions = {
            name: 'images/[name].[ext]',
        },
        imageOptions
    } = {}) => {

    return {
        module: {
            rules: [
                {
                    test: /\.(jpg|jpeg|gif|png)$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: fileOptions,
                        },
                        {
                            loader: 'image-webpack-loader',
                            options: imageOptions,
                        }
                    ]
                }
            ]
        }
    }
}

exports.loadFonts = ({
    test = /\.(woff|woff2)$/,
    exclude = /node_modules/,
    options = {
        limit: 30000,
        name: 'fonts/[name].[ext]',
    }
} = {}) => {

    return {
        module: {
            rules: [
                {
                    test,
                    exclude,
                    use: {
                        loader: 'url-loader',
                        options
                    }
                }
            ]
        }
    }
}

exports.loadHTML = ({
    pluginOptions
} = {}) => {

    return {
        module: {
            rules: [
                {
                    test: /\.html$/,
                    exclude: /node_modules/,
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
            new HTMLPlugin(pluginOptions),
        ]
    }
}

exports.CleanPlugin = ({paths, options}) => {

    return {
        plugins: [
            new CleanPlugin(paths, options),
        ]
    }
}

exports.PurifyCSSPlugin = ({ paths, purifyOptions}) => {

    return {
        plugins: [
            new PurifyCSSPlugin({
                paths,
                purifyOptions,
            }),
        ]
    }
}

exports.CompressionPlugin = () => {

    return {
        plugins: [
            new CompressionPlugin({
                test: /\.(js|css|html)$/,
            }),
        ]
    }
}

exports.extractBundle = ({
        name = 'libs',
    } = {}) => {

    return {
        plugins:[
            new webpack.HashedModuleIdsPlugin(),

            new webpack.optimize.CommonsChunkPlugin({
                name,
            }),

            new webpack.optimize.CommonsChunkPlugin({
                name: '_',
            }),
        ]
    }
}