const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ExtractMainCSS = new ExtractTextPlugin('style.css', {
    allChunks: true,
});

const plugins = [
    new HtmlWebpackPlugin({
        template: 'client/index.html',
        hash: true,
    }),
    new ExtractTextPlugin('[name].css', {
        allChunks: true,
    }),
    ExtractMainCSS,
];

if (process.env.NODE_ENV === 'production') {
    plugins.push(new webpack.optimize.UglifyJsPlugin());
    plugins.push(new webpack.optimize.DedupePlugin());
}

const webpackConfig = {
    entry: './client/src/index.js',
    output: {
        path: 'public',
        filename: 'bundle.js',
    },
    resolve: {
        modulesDirectories: [path.resolve(__dirname, 'client/src'), 'node_modules'],
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: [/node_modules/],
            },

            {
                test: /\.scss$/,
                loader: ExtractMainCSS.extract('css!sass'),
            },
            {
                test: /\.(jpg|jpeg|gif|png)$/,
                loader: 'file-loader',
            },
        ],
    },
    devServer: {
        contentBase: __dirname,
    },
    plugins: plugins,
    node: {
        fs: 'empty',
    },
};

module.exports = webpackConfig;
