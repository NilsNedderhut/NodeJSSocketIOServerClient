Server = require("./server.js");
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const param = require("commander");

param
    .option("-p, --port <number", "Port of the server", 80)
    .option("-r, --root <path>", "Directory of the index file", "./../dist/");
param.parse(process.argv);

app.use(express.static(param.root + "/"));
app.get("/", (req, res) => {
    res.sendFile(`${param.root}/index.html`);
});

socketio = new Server(server);
server.listen(param.port);
socketio.start();
