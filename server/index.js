const express = require("express");
const app = express();
const { cfg } = require("../config");
const fs = require("fs");

(async () => {
    const webRouter = await require("../web").init();
    app.use(webRouter);

    app.listen(cfg.app.port, () => {
        console.log("server listening port: " + cfg.app.port);
    });
})().catch(console.log);


