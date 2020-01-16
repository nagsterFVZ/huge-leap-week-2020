const webpack = require('webpack');
const WebpackDevServer = require("webpack-dev-server");
const Path = require('path');

const BUILD_DIR = Path.resolve(__dirname, '..', 'compiled');
const APP_DIR = Path.resolve(__dirname, '..', 'src');

const config = {
    mode: "production",
    entry: APP_DIR + "/App.js",
    output: {
        path: BUILD_DIR,
        filename: "bundle.js",
        publicPath: "/assets/"
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|etc)$/,
                exclude: [/\.inline\.svg$/],
                use: ['url-loader']
            },
            {
                test: /\.inline\.svg$/,
                use: ['svg-react-loader']
            },
            {
                test: /\.jsx?/,
                include: APP_DIR,
                exclude: /node_modules/,
                loaders: ['babel-loader?presets[]=env,presets[]=react']
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.png$/,
                loader: ['url-loader?minetype=image/png']
            }
        ]
    },
    devtool: "source-map",
    context: __dirname,
    target: "web",
    stats: "errors-only",
    plugins: [
        
    ]
};

module.exports = config;