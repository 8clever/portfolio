const express = require("express");
const app = express();
const { cfg } = require("../config");
const spdy = require("spdy");
const fs = require("fs");

const options = {
    key: fs.readFileSync("./server.key"),
    cert: fs.readFileSync("./server.cert")
};

(async () => {
    const webRouter = await require("../web").init();
    app.use(webRouter);

    spdy.createServer(options, app).listen(cfg.app.port, () => {
        console.log("server listening port: " + cfg.app.port);
    });
})().catch(console.log);


