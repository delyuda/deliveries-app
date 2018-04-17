const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin =  require('extract-text-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');

const cfg = require('./base');

const config = {
    entry: cfg.paths.entry,
    output: {
        publicPath: ''
    },
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin({
            title: cfg.package.name,
            template: cfg.paths.htmlPath,
            filename: cfg.paths.outputHtml,
            inject: 'body',
            hash: false
        }),
        new CleanPlugin([cfg.paths.output], {
            root: cfg.paths.root
        }),
        new ExtractTextPlugin('css/[name].css', {allChunks: true}),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify('production')
            }
        })
    ]
};

module.exports = config;