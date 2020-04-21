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

const config = {
    context: __dirname,
    mode: args.options.dev ? __.ENV.DEV : __.ENV.PRODUCTION,
    module: {
        rules: [
            jsxLoader
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
            React: "react",
            ReactDOM: "react-dom",
            _: "lodash",
            PropTypes: "prop-types"
        })
        
    ]
};

const server = {
    ...config,
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