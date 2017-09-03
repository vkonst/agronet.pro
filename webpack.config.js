var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: {
        bundle: [
            './src/style/style.scss'
        ]
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|jpeg|woff|woff2|eot|ttf|svg)$/,
                loader: ['url-loader?limit=1024']
            }
        ]
    },
    output: {
        filename: 'js/[name]-[hash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.template.html',
            chunks: ['bundle'],
            inject: 'head',
            filename: '../index.html'
        })
    ]
};