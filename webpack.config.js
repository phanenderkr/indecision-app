const path = require('path');

module.exports={
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, 'public'),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            loader: "babel-loader",//which loader we're going to use
            test: /\.js$/,//what type of files you want to run this rule on
            exclude: /node_modules/
        },{
            test:/\.scss$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        }]
    },
    devtool: "cheap-module-source-map",
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }

};