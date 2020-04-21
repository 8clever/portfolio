const express = require("express");
const path = require("path");
const sassMiddleware = require("node-sass-middleware");
const distPath = path.join(__dirname, "./dist");
const React = require("react");
const ReactDOM = require("react-dom/server");
const fs = require("fs");
const { cfg, __ } = require("../config");

const hash = new Date().valueOf();

module.exports.init = async function () {
	let Router = express();
	let indexHTML = fs.readFileSync(__dirname + "/dist/factory.html").toString();
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

	// sass
	Router.use(sassMiddleware({
		src: path.join(__dirname, "./style"),
		dest: distPath,
		outputStyle: 'compressed'
	}));

	// static
	Router.use(express.static(distPath, {
		maxAge: "1d"
	}));

	// react end point
	Router.get("*", (req, res, next) => {
		// pass options here
		const context = {};
		const component = ReactDOM.renderToString(Factory({
			req,
			context
		}))

		if (context.url) {
			res.redirect(301, context.url);
			return;
		}
		
		const __html = indexHTML
			.replace(/<% prefix %>/gmi, "")
			.replace(/<% hash %>/gmi, hash)
			.replace(/<div id="root"><\/div>/, `<div id="root">${component}</div>`);

		res.send(__html);
	});

	return Router;
};
