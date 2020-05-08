const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')

const outputPath = path.resolve(__dirname, 'dist');

module.exports = {
    //webpackで使用するfileと、出力先の指定
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: outputPath
    },
    //laoderの登録（testにuseで指定する適応させるファイルの記載）
    module: {
        rules: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader" 
            },
            { 
                test: /\.css$/, 
                use: [
                    //reverse order で実行されるので記述順に注意
                    'style-loader',
                    'css-loader'
                ]
            },
            { 
                test: /\.scss$/, 
                use: [
                    //reverse order で実行されるので記述順に注意
                    'style-loader',
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
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ]
};