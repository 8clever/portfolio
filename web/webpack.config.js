const path = require('path');
const webpack = require("webpack");
const _ = require("lodash");
const argv = require("argv");
const { __, pubConfig } = require("../config");

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
        "file-loader",
        {
            loader: 'image-webpack-loader',
            options: {
                outputPath: "images",
                bypassOnDebug: true, // webpack@1.x
                disable: true, // webpack@2.x and newer
            },
        }
    ]
}

const textLoader = {
    test: /\.txt$/i,
    loader: 'file-loader',
    options: {
        outputPath: 'text'
    }
}

const config = {
    context: __dirname,
    mode: args.options.dev ? __.ENV.DEV : __.ENV.PRODUCTION,
    module: {
        rules: [
            jsxLoader,
            imageLoader,
            textLoader
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/"
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

const server = {
    ...config,
    externals: [ "react", "react-dom" ],
    target: "node",
    entry: {
        server: "./pages/Server"
    },
    output: {
        ...config.output,
        libraryTarget: "commonjs2"
    }
};

const web = {
    ...config,
    entry: [
        "./pages/Web"
    ]
};

module.exports = [ web, server ];