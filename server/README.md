# Server

The server runs on the runtime enviremont Node.js. It is completly written in JavaScript.

## Launch

```
node main.js
```

Params:

-   port: Specify the port the server is running on
-   root: Directorty of the web app

## Packages

To ensure the functionality of the webserver the following packages has been used:

-   express: Web framework to enable web server functionalities
-   commander: Process launch parameters
-   socket.io: Websocket server

#### Install

As with all node applications the specified packages need to be installed using the node package manager:

```
npm install
```

Afterwards the program can be launched.

## Websockets

Socket.io extends the normal websocket package ws with rooms. Since the server connects to two different clients, there are two rooms. One is the _webapp_ room, which handles the communication with the web application and the _sensor_ room, which receives the data from the different clients.

#### Sensor

After connection the client can send on the event _data_ data to server. The data is stored in a buffer which stores the last 1440 (minutes of a day) entries.

###### Format of message

```javascript
{
    id: string,
    data: {
        type: string,
        value: number
    }[]
}
```

#### Webapp

After connection the server sends all stored data to the connected client. Afterwards, whenever data changes the changed data is sent to the client. No need for the client to transmit any request.

###### Format of message

```javascript
{
    id: string,
    data: {
        type: string,
        value: number[]
    }[]
}
```
