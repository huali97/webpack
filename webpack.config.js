const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    devServer:{//devSrever
        port:3000,
        progress:true,
        contentBase:'./dist'
    },
    mode:"development",//development开发模式，production生产模式
    entry:'./src/js/index.js',//入口
    output:{//出口配置
        filename:'bundle.js',  
        path:path.resolve(__dirname,'dist')
    },// 出口
    plugins:[//插件
        new HtmlWebpackPlugin({
            template:'./src/index.html',//原模板html
            filename:'index.html',//生成后的文件名
            minify:{
                removeAttributeQuotes:true,//取出html双引号
                collapseWhitespace:true,//折叠成一行
            },//打包压缩
            hash:true,//路径引入hash
        }),
        new MiniCssExtractPlugin({
            filename:"main.css"
        })
    ],
    module:{//模块
            rules:[//规则
                {
                    test: /\.css$/,
                    use: [
                        // css-loader 支持import 语法
                        //style-loader 将css插入header中
                        //loader单一 支持多个loader需要使用[]
                        //loader从右到左执行
                        MiniCssExtractPlugin.loader,
                        'css-loader'
                    ]
                },
                {
                    test: /\.less$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'less-loader'
                    ]
                }
            ]
    }
}