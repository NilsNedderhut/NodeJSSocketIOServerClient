var socketio = require('socket.io-client');

class SocketClient{

    connections = [];

    constructor(address, port){
        this.address = address 
        this.port = port
    }

    connect(){
        this.io = socketio(`${this.address}:${this.port}`);
        //this.io.on('connect', function(){});
        console.log(`Client connected to server on port ${this.port}`);
        
    }

    sendData(msg){
        this.io.emit('data', msg);
    }




}

module.exports = SocketClient;