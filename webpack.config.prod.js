const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const path = require('path');

const PATHS = {
    app: path.resolve(__dirname, 'src'),
    build: path.resolve(__dirname, 'dist'),
    assets: path.resolve(__dirname, 'dist/assets')
};

const prod = merge(
    {
        context: PATHS.app,
        filename: 'bundle.js',
        plugins: [
            new HtmlWebpackPlugin({
                template: 'index.html'
            }),
            new ExtractTextWebpackPlugin({
                filename: 'bundle.css'
            })
        ],
        resolve: {
            modules: ['node_modules'],
            extensions: ['.css', '.js', '.json', '.jsx', '.scss']
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    include: PATHS.app,
                    use: ['babel-loader']
                },
                {
                    test: /\.css$/,
                    use: ExtractTextWebpackPlugin.extract({
                        fallbackLoader: 'style-loader',
                        loader: 'css-loader'
                    })
                },
                {
                    test: /\.scss$/,
                    use: ExtractTextWebpackPlugin.extract({
                        fallbackLoader: 'style-loader',
                        loader: 'sass-loader?sourceMap'
                    })
                }
            ]
        }
    }
);

module.exports = prod;
