Server = require("./server.js");
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const param = require("commander");
const Buffer = require('./buffer.js')

param
    .option("-p, --port <number", "Port of the server", 80)
    .option("-r, --root <path>", "Directory of the index file", "./../dist/");
param.parse(process.argv);

const dataset = new Buffer(24 * 60);

socketio = new Server(server, dataset);
socketio.start();

app.use(express.urlencoded({
    extended: false
}))
app.use(express.json());

app.post("/api/data", function (req, res) {
    dataset.addData(req.body);
    socketio.onNewData(req.body.id)
    res.status(200).send('works');
});


app.use(express.static(param.root + "/"));

app.get("/", (req, res) => {
    res.sendFile(`${param.root}/index.html`);
});




server.listen(param.port, () => {console.log(`Server listening on port ${param.port}`)});

