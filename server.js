const express = require("express");
const http = require("http");
const path = require("path");

const app = express();

app.use((req, res, next) => {
    if (!req.query.token || req.query.token !== "") {
        res.status(403).json({ error: "No token was provided or the token was not valid." });
        return;
    }

    next();
});

app.use(express.static(path.join(__dirname, "files")));

http.createServer(app).listen(80);
