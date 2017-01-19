const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let src = {
    app: path.resolve(__dirname,'src', 'app.js'),
    public: path.resolve(__dirname, 'public'),
    html: {template: path.resolve(__dirname,'src', 'index.html')}
}

module.exports = {
    entry: src.app,
    output: {
        path: src.public,
        // publicPath: src.public,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'index.html',
            template: src.html.template
        })
    ],
    devServer: {
        contentBase: src.public
    },
    devtool: 'sourcemap'
}