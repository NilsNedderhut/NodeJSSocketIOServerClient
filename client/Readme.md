# Client
A quick example of a client running on the runtime enviremont Node.js. It is completly written in JavaScript.

## Launch
```
node main.js
```

All kind of parameters like the ip of the server have to be adjusted in the code.

## Packages
To ensure the functionality of the client the following packages has been used:
- node-dht-sensor: Read out data of [DHT22 Sensor](https://www.mikrocontroller-elektronik.de/dht22-am2302-luftfeuchte-und-temperatursensor/)
- socket.io-client: Websocket client

#### Install
As with all node applications the specified packages need to be installed using the node package manager:
``` 
npm install
```
Afterwards the program can be launched.

## Websockets
The client connects to the *sensor* room of the webserver. Each seconds it sends the read data using the event *data*. A POST request might be simplier but this code only shows the posibilities of websockets.

