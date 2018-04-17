const webpack = require('webpack');
const open = require('open');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin =  require('extract-text-webpack-plugin');

const cfg = require('./base');

const host = 'http://localhost:' + cfg.port + '/';

open(host);

const config = {
    devtool: 'inline-source-map',
    watch: true,
    entry: [
        'webpack/hot/only-dev-server',
        cfg.paths.entry
    ],
    output: {
        publicPath: host
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: cfg.package.name,
            template: cfg.paths.htmlPath,
            inject: 'body',
            hash: false
        }),
        new ExtractTextPlugin('css/[name].css', {disable: true}),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify('development')
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    mode: "development",
    devServer: {
        port: cfg.port,
        historyApiFallback: true,
        inline: true,
        hot: true,
        contentBase: cfg.paths.output,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Expose-Headers": "X-Token"
        }
    }

};

module.exports = config;