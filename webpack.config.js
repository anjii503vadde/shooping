const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
require('babel-polyfill');

module.exports = 
{
    entry: ["babel-polyfill", './src/index.js'],
    output: 
    {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
   
    mode: 'development',  
    devtool: "source-map", 
    target: 'web', 
    module:
    {
        rules:
        [
            { 
                test: /\.js$/,
                exclude: /node_modules/,
                use: 
                {
                    loader: 'babel-loader',
                    options: 
                    {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: 
                [
                    "style-loader", 
                    "css-loader", 
                    "sass-loader" 
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loader:"file-loader",
                query:
                {
                    name:'[name].[ext]',
                    outputPath:'images/'
                }
            },
            {
                enforce: 'pre',
                test: /\.js?$/,
                exclude: [/node_modules/],
                loader: 'eslint-loader',
                options: 
                {
                    fix: true,
                },
            },
        ]
    },
    plugins: 
    [
        new HtmlWebpackPlugin
        ({
            template: 'index.html'
        }),
        new webpack.ProvidePlugin
        ({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery'",
            "window.$": "jquery",
            Popper: ['popper.js', 'default']
        })
    ]
};