const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {

    entry: {
        home: './frontend/app.js',
        internacional: './frontend/internacional.js',
        signin: './frontend/signin.js',
        signup: './frontend/signup.js',
        dashboard: './frontend/dashboard.js'
    },
    output: {
        path: path.join(__dirname, 'backend/public'),
        filename: 'js/[name].bundle.js'
    },
    mode: 'development',

    module: {
        rules: [
            {
                test: /\.css/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            } 
        ] 
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './frontend/dashboard.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,  
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'css/bundle.css'
        })
    ],
    devtool: 'source-map'
};

// {} [] || \