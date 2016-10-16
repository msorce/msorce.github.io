var debug = process.env.NODE_ENV !== "production";
console.log(debug);
var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname + '/src'),
    devtool: debug ? "inline-sourcemap" : null,
    entry: "./js/app.js",
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
                presets: ['react', 'es2015', 'stage-0'],
                plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
            }
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
        }, {
            test: /\.(woff|woff2|eot|ttf|svg)$/,
            loader: "url"
        }]
    },
    output: {
        path: __dirname + "/src",
        filename: "bundle.min.js"
    },
    plugins: debug ? [] : [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            sourcemap: false,
            compress: {
                warnings: false
            }
        }),
    ]
};
