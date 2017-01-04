var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: {
        'index': './src/app/md-keyboard/index.ts'
    },
    devtool: 'source-map',

    output: {
        path: './dist',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
        umdNamedDefine: true,
        library: 'md-keyboard',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['', '.ts', '.js', '.scss', '.html']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['ts-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.scss$/,
                loader: 'sass'
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['md-keyboard']
        })
    ]
};
