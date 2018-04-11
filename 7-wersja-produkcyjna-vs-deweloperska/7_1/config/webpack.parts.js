module.exports.loadJS = ({
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