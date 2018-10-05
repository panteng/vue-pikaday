const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: [
        './main.js'
    ],
    output: {
        path: path.resolve(__dirname, 'bundles'),
        publicPath: '/bundles/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    devServer: {
        hot: true
    }
};
