const express = require("express");
const path = require("path");
const distPath = path.join(__dirname, "./dist");
const { cfg, __ } = require("../config");

module.exports.init = async function () {
	let Router = express();

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
		maxAge: "366d"
	}));

	// react end point
	Router.get("*", (req, res, next) => {
		res.sendFile(path.join(__dirname, "/dist/index.html"));
	});

	return Router;
};
