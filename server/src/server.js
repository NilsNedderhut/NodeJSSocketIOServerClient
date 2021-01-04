const socketio = require("socket.io");

class SocketServer {
    buffer;

    constructor(server, buffer) {
        this.io = socketio(server);
        this.buffer = buffer;
    }

    start() {
        this.initIO();
        console.log(`Websocket Server initialized`);
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
                if (msg.hasOwnProperty('id') && msg.hasOwnProperty('data')) {
                    this.buffer.addData(msg);
                    this.onNewData(msg.id);
                }
                else {
                    console.warn(`Format of msg ${msg} is wrong: No id or data property`);
                }
                
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

    onNewData(id) {
        let data = this.buffer.getDataObj(id);
        this.webappServer.emit("dataset", {id, data});
    }

    sendAllData(socket) {
        var ids = this.buffer.getAllIds();
        ids.forEach((id) => {
            socket.emit("dataset", {
                id: id,
                data: this.buffer.getDataObj(id),
            });
        });
    }
}


module.exports = SocketServer;
