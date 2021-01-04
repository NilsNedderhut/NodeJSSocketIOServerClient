# NodeJSSocketIOServerClient

This project is mainly showing how easy it is to connect many differnt devices and collecting their data inside a network. Here the temperature and humitidy of different rooms is collected and displayed inside a wep application.

![Overview](/extras/screenshots.png "Overview")

![Room Details](/extras/screenshots/details.png "Details")

## Backend

All of the processes in the backend are running on Node.js, a runtime enviremont for JavaScript.

### Server

The server has two tasks, hosting the webapp and handling all data. Therefore it has an interface to receive data and store it afterwards. Also it has an interface to transmit data to a webapp.

### Clients

The clients major task is to read out data from an sensor and transmit it to the server repeatedly.

### Why JavaScript?

That's just a personal preference. First of all I like JavaScript. And since I wanted to do a web frontend to display the collected data, I stayed with JavaScript in backend aswell. But for example a Python backend would have been possible with a similar effort. Even a mixed backend would be possible. There are libraries for the sensor as well as the websockets.

## Frontend

The frontend is created with the JS framework Angular. The webapp has only the task to visualize the received data. It was ensured that different rooms and data sets are automatically created based on the data structure, so that the webapp never needs to be adapted unless new features are required.

## Communication

The communication between the server and all kind of clients is handled by websockets. The big advantage of websockets is bidirectional communication. So data can transfered from server to client without request. The socket.io package (https://www.npmjs.com/package/socket.io) is used for this functionality.

### Why Websockets?

For real-time data, websockets are the obvious choice for communication between backend and frontend. Since websockets enable bidirectional communication, data is only sent when new data is available. This also guarantees that the data is up to date on the frontend. Since websockets are already used there, I also chose websockets for the communication between the server and the different clients. However, there is also an interface for a POST request, since no bidirectional communication is necessary.
