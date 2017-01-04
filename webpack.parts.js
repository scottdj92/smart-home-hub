const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack-plugin');

exports.purifyCSS = function(paths) {
    paths = Array.isArray(paths) ? paths : [paths];

    return {
        plugins: [
            new PurifyCSSPlugin({
                basePath: '/',
                paths: paths.map(path => `${path}/*`),
                resolveExtensions: ['.html']
            })
        ]
    }
};

exports.devServer = function(options) {
    return {
        devServer: {
            historyApiFallback: true,
            hot: true,
            hotOnly: true,
            stats: 'errors-only',
            host: options.host,
            port: options.port
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin({

            })
        ]
    }
};
