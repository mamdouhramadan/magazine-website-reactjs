const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
    template: "./public/index.html",
    filename: "./index.html"
});
module.exports = {
    mode: 'development',
    devServer: {
        port: 3030,
        hot: true,
        open: true,
        historyApiFallback: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }, {
            test: /\.s[ac]ss$/i,
            use: ["style-loader", "css-loader", "sass-loader",],
        },
        {
            test: /\.(svg|png|jpg|jpeg|gif|mp4)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'media/'
                }
            }]
        }
        ]
    },
    plugins: [htmlPlugin]
};


