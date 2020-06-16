const socketio = require("socket.io");

class SocketServer {
    buffer;

    constructor(server) {
        this.io = socketio(server);
        this.buffer = new Buffer(60 * 24);
        this.buffer.addData({
            id: "Test",
            humitiyy: 56,
        });
    }

    start() {
        this.initIO();
        console.log(`Server listening`);
    }

    initIO() {
        this.webappServer = this.io.of("/webapp");
        this.sensorServer = this.io.of("/sensor");

        this.webappServer.on("connection", (socket) => {
            console.log(
                `Client connected: ${socket.request.connection.remoteAddress}`
            );
            this.sendAllData(socket);

            socket.on("disconnect", () => {
                console.log(
                    `Client disconnected: ${socket.request.connection.remoteAddress}`
                );
            });
        });

        this.sensorServer.on("connection", (socket) => {
            console.log(
                `Client connected: ${socket.request.connection.remoteAddress}`
            );

            socket.on("data", (msg) => {
                this.buffer.addData(msg);
                this.webappServer.sockets.emit("dataset", {
                    id: msg.id,
                    data: this.buffer.getData(msg.id),
                });
            });

            socket.on("disconnect", () => {
                socket.on("disconnect", () => {
                    console.log(
                        `Client disconnected: ${socket.request.connection.remoteAddress}`
                    );
                });
            });
        });
    }

    sendAllData(socket) {
        var ids = this.buffer.getAllIds();
        ids.forEach((id) => {
            socket.emit("dataset", {
                id: id,
                data: this.buffer.getData(id),
            });
        });
    }
}

class Buffer {
    dataset = {};
    maxLength;

    constructor(maxLength) {
        this.maxLength = maxLength;
    }

    getAllIds() {
        return Object.keys(this.dataset);
    }

    getData(id) {
        return this.dataset[id];
    }

    addData(dataObj) {
        if (this.dataset[dataObj.id]) {
            for (const key in dataObj) {
                if (key != "id")
                    this.addValueToArray(dataObj.id, key, dataObj[key]);
            }
        } else this.initNewID(dataObj);
    }

    initNewID(dataObj) {
        this.dataset[dataObj.id] = {};
        for (const key in dataObj) {
            if (key != "id") this.dataset[dataObj.id][key] = [dataObj[key]];
        }
    }

    addValueToArray(id, key, value) {
        this.dataset[id][key].push(value);
        if (this.dataset[id][key].length > this.maxLength)
            this.dataset[id][key].pop();
    }
}

module.exports = SocketServer;
