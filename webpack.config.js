const path = require("path");
const webpack = require("webpack");
const merge = require('webpack-merge');

// const autoprefixer = require('autoprefixer');
const ExtractTextPlugin =  require('extract-text-webpack-plugin');

// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css"
});

const cfg = require('./config/base');
const src = cfg.paths.src;

const dev = './config/webpack.dev';
const prod = './config/webpack.prod';

const config = merge({
    context: src,
    output: {
        path: cfg.paths.output,
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader?presets[]=es2015'
            },
            {
                test: /\.css$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.html$/,
                use: 'html-loader',
                exclude: /app\.html$/
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        extractSass,
        new ExtractTextPlugin('css/[name].css', {allChunks: true})
    ]
}, cfg.isDevelop ? require(dev) : require(prod));

module.exports = config;