const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const PATHS = {
    app: path.resolve(__dirname, 'src'),
    build: path.resolve(__dirname, 'dist'),
    assets: path.resolve(__dirname, 'dist/assets')
};

const config = {
    context: PATHS.app,
    entry: {
        app: PATHS.app + '/index.jsx'
    },
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },
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
        extensions: ['.css', '.js', '.jsx', '.scss']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: PATHS.app,
                use: ['react-hot-loader', 'babel-loader']
            },
            {
                test: /\.css$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallbackLoader: "style-loader",
                    loader: "css-loader"
                })
            },
            // {
            //     test: /\.scss$/,
            //     use: ExtractTextWebpackPlugin.extract({
            //         fallbackLoader: "style-loader",
            //         loader: "css-loader!sass-loader?sourceMap"
            //     })
            // },
            {
                test: /\.scss$/,
                use: 'sass-loader',
                query: {
                    sourceMaps: true
                }
            }
        ]
    }
};

module.exports = config;
