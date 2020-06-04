var socketio = require('socket.io');

class SocketServer{

    connections = [];

    constructor(port){
        this.port = port
    }

    start(){
        this.io = socketio(this.port);
        this.initIO();
        console.log(`Server listening on port ${this.port}`);
    }

    initIO(){
        this.io.on('connection', socket => {
            
            this.addConnection(socket.id);

            socket.on('data', msg => {
                console.log(msg);
            })

            socket.on('disconnect', () => {
                this.removeConnection(socket.id);
            })

        })
    }


    addConnection(id){
        this.connections.push(id);
        console.log(`New Connection: ${id}`);
    }

    removeConnection(id){
        this.connections.filter(e => e != id);
        console.log(`Client disconnected: ${id}`);
    }

}

module.exports = SocketServer;