const path = require('path');
const webpack = require("webpack");
const _ = require("lodash");
const argv = require("argv");
const { __ } = require("../config");

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
}

let config = {
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
            "CFG": JSON.stringify({})
        }),
        new webpack.ProvidePlugin({
            React: "react",
            ReactDOM: "react-dom",
            _: "lodash",
            PropTypes: "prop-types"
        })
    ]
}

let server = _.merge({}, config, {
    target: "node",
    entry: {
        server: "./pages/Server"
    },
    output: {
        libraryTarget: "commonjs2"
    }
})

let web = _.merge({}, config, {
    entry: [
        "./pages/Web"
    ],
    output: {
        filename: "web.js"
    }
})

module.exports = [ web, server ];