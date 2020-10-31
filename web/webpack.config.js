const path = require('path');
const webpack = require("webpack");
const _ = require("lodash");
const argv = require("argv");
const { __, pubConfig } = require("../config");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest')

argv.option({
    name: 'dev',
    type: "boolean",
    description: 'development mode',
    example: "'npx webpack --dev"
});

argv.option({
    name: 'progress',
    type: 'string',
    description: 'progress bar',
    example: "'npx webpack --progress"
});

let args = argv.run();

const jsxLoader = {
    test: /\.jsx$|\.js$/,
    exclude: /node_modules\//,
    use: [
        {
            loader: "babel-loader"
        }
    ]
};

const imageLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
        {
            loader: "file-loader",
            options: {
                outputPath: "images"
            }
        },
        {
            loader: 'image-webpack-loader',
            options: {
                mozjpeg: {
                    progressive: true,
                    quality: 65
                },
                // optipng.enabled: false will disable optipng
                optipng: {
                    enabled: false,
                },
                pngquant: {
                    quality: [0.65, 0.90],
                    speed: 4
                },
                gifsicle: {
                    interlaced: false,
                }
            },
        }
    ],
}

const textLoader = {
    test: /\.txt$$/i,
    loader: 'file-loader',
    options: {
        outputPath: 'text'
    }
}

const fontLoader = {
    test: /\.eot$|\.ttf$|\.woff$|\.woff2$|\.svg$/i,
    loader: 'file-loader',
    options: {
        outputPath: 'fonts'
    }
}

const sassLoader = {
    test: /\.s[ac]ss$/i,
    use: [
        'style-loader',
        'css-loader',
        'sass-loader',
    ],
}

const config = {
    context: __dirname,
    mode: args.options.dev ? __.ENV.DEV : __.ENV.PRODUCTION,
    module: {
        rules: [
            fontLoader,
            sassLoader,
            jsxLoader,
            imageLoader,
            textLoader,
        ]
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/"
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            "CFG": JSON.stringify(pubConfig)
        }),
        new webpack.ProvidePlugin({
            _: "lodash",
            PropTypes: "prop-types"
        })
    ]
};

const web = {
    ...config,
    plugins: [
        ...config.plugins,
        new HtmlWebpackPlugin({
            title: "VIP Software",
            favicon: path.join(__dirname, "/dist/favicon.ico"),
            meta: {
                viewport: "width=device-width, user-scalable=yes, initial-scale=1.0, maximum-scale=5",
                description: "VIP Software. Web-development. Ivan Vityaev",
                charSet: "utf-8",
                "yandex-verification": "2f0734bcc1260adb"
            }
        }),
        new WebpackPwaManifest({
            "short_name": "VIP Software",
            "name": "VIP Software",
            "description": "Web-development, Ivan Vityaev",
            "icons": [
                {
                "src": path.join(__dirname, "/dist/logo.png"),
                "type": "image/png",
                "sizes": "192x192"
                }
            ],
            "start_url": "/",
            "background_color": "#fff",
            "display": "standalone",
            "scope": "/",
            "theme_color": "#fff"
        }),
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true
        })
    ],
    entry: [
        "./pages/Web"
    ]
};

module.exports = [ web ];