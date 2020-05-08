const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

const outputPath = path.resolve(__dirname, 'dist');

module.exports = {
    //webpackで使用するfileと、出力先の指定
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: outputPath
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new miniCssExtractPlugin({
            //nameはdefaultでmainが使用される。
            filename: '[name].[hash].css'
        })
    ],
    //laoderの登録（testにuseで指定する適応させるファイルの記載）
    module: {
        rules: [
            //eslint
            {
                //enforce: "pre"で他のローダー（enforce: "pre"の記載がないもの）よりも先に処理を行う
                enforce: "pre",
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "eslint-loader"
            },
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader" 
            },
            { 
                test: /\.(sc|c)ss$/, 
                use: [
                    //reverse order で実行されるので記述順に注意
                    miniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpe?g|png|gif|ico|svg)$/i, 
                loader: 'url-loader',
                options: {
                    limit: 2048,
                    name: './images/[name].[ext]'
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    //起動時にページを開くように指定
    devServer: {
        contentBase: outputPath
    },
    optimization: {
        minimizer: [
            new optimizeCssAssetsWebpackPlugin({})
        ]
    }
};