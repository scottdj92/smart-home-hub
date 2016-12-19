var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src/app');
var ASSET_DIR = path.resolve(__dirname, 'dist/assets');

var config = {
    context: __dirname + '/src',
    entry: {
        app: APP_DIR + '/index.jsx'
    },
    output: {
        path: 'dist',
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Smart Home Hub'
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
                include: APP_DIR,
                use: ['react-hot-loader', 'babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['css-loader', 'sass-loader']
            }
        ]
    }
};

module.exports = config;
