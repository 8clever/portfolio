const express = require("express");
const path = require("path");
const distPath = path.join(__dirname, "./dist");
const React = require("react");
const { cfg, __ } = require("../config");
const ReactDOM = require("react-dom/server.node");

module.exports.init = async function () {
	let Router = express();
	let { Server } = require("./dist/server.js");
	let Factory = React.createFactory(Server);

	// dev hot router
	if (cfg.env === __.ENV.DEV) {
		const webpack = require("webpack");
		let webpackConfig = require("./webpack.config")[0];

		const compiler = webpack({
			...webpackConfig,
			mode: __.ENV.DEV,
			plugins: [
					...webpackConfig.plugins,
					new webpack.HotModuleReplacementPlugin(),
					new webpack.NoEmitOnErrorsPlugin()
			],
			entry: [
					`webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000`,
					...webpackConfig.entry
			],
			devtool: "#source-map"
		});

		Router.use(require("webpack-dev-middleware")(compiler, {
			logLevel: 'warn',
			publicPath: "/"
		}));

		Router.use(require("webpack-hot-middleware")(compiler, {
			log: console.log, path: `/__webpack_hmr`, heartbeat: 10 * 1000
		}));
	}

	// static
	Router.use(express.static(distPath, {
		index: false,
		maxAge: "30d"
	}));

	// react end point
	Router.get("*", (req, res, next) => {
		// pass options here
		const context = {};

		const html = ReactDOM.renderToString(Factory({
			req,
			context
		}));

		if (context.url) {
			res.redirect(301, context.url);
			return;
		}
		
		res.send(html);
	});

	return Router;
};
