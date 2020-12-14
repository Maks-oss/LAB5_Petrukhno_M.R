

const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './js/index.js',
    devtool: 'inline-source-map',
    devServer: {
        liveReload: true,
        hot: true
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules:[
            {

                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },{
                test: /\.js$/,
                exclude: /node_modules/,

                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            filename: 'index.html',
            template: 'index.html'
        })
    ]
};