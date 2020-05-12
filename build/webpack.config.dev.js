const baseConfig = require('./webpack.config.base')
const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')

const devConfig = {
    mode: 'development',
    output: {
        path: path.join(__dirname, "..", 'dist'),
        filename: '[name]-[hash:8].js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: '../dist',
        hot: true
    },
    devtool: 'source-map'
}
module.exports = webpackMerge(baseConfig, devConfig)


// module.exports = {
//     entry: {
//         index: './src/index.tsx'
//     },
//     mode: 'development',
//     output: {
//         path: path.join(__dirname, "..", 'dist'),
//         filename: '[name]-[chunkhash:8].js'
//     },
//     resolve: {
//         extensions: [".js",".jsx",".ts",".tsx",".json"]
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.(ts|tsx)$/,
//                 loader: 'ts-loader',
//                 exclude: /node_modules/
//             }
//         ]
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: path.resolve(__dirname, "..", "src", "public", "index.html"),
//             chunks: ['vendors',"index"],
//             inject: true
//         }),
//         new webpack.HotModuleReplacementPlugin()
//     ],
//     optimization: {
//         splitChunks: {
//             cacheGroups: {
//                 commons: {
//                     test: /(react|react-dom)/,
//                     name: 'vendors',
//                     chunks: "all"
//                 }
//             }
//         }
//     },
//     devServer: {
//         contentBase: '../dist',
//         hot: true
//     },
//     devtool: 'source-map'
// }