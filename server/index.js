const express = require("express");
const compression = require("compression");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

(async () => {
    app.use(compression({
      level: 9
    }));

    app.use(express.static(path.join(__dirname, "../build/"), {
      index: false,
      maxAge: "366d"
    }));

    app.get("*", (req, res, next) => {
      res.sendFile(path.join(__dirname, "../build/index.html"));
    });

    app.listen(port, () => {
        console.log("server listening port: " + port);
    });
})().catch(console.log);