const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const prod = require('./webpack.config.prod');
const parts = require('./webpack.parts');

const PATHS = {
    app: path.resolve(__dirname, 'src'),
    build: path.resolve(__dirname, 'dist'),
    assets: path.resolve(__dirname, 'dist/assets')
};

const common = merge(
    {
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
            })
        ],
        resolve: {
            modules: ['node_modules'],
            extensions: ['.css', '.js', '.jsx', '.scss', '.json']
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
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.scss$/,
                    use: ['style-loader', 'css-loader', 'sass-loader']
                }
            ]
        }
    }
);

module.exports = function(env) {
    if (env === 'development') {
        return merge(
            common,
            {
                performance: {
                    hints: "warning"
                }
            },
            parts.devServer({
                host: process.env.HOST,
                port: process.env.PORT
            }),
            parts.purifyCSS(PATHS.app)
        );
    } else {
        return merge(
            prod,
            parts.purifyCSS(PATHS.app)
        );
    }
};
