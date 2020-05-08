const path = require('path')

const outputPath = path.resolve(__dirname, 'dist')

module.exports = {
    //webpackで使用するfileと、出力先の指定
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: outputPath
    },
    //起動時にページを開くように指定
    devServer: {
        contentBase: outputPath
    }
}