const baseConfig = require('./webpack.config.base')
const webpackMerge = require('webpack-merge')
const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const prodConfig = {
    mode: 'production',
    output: {
        path: path.join(__dirname, "..", 'dist'),
        filename: '[name]-[chunkhash:8].js'
    },
    plugins: [
        new CleanWebpackPlugin()
    ],
}
module.exports = webpackMerge(baseConfig, prodConfig)

// module.exports = {
//     entry: {
//         index: './src/index.tsx'
//     },
//     mode: 'production',
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
//         new CleanWebpackPlugin()
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
//     }
// }