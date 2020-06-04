Client = require('./client.js');


client = new Client('http://localhost', '4500');
client.connect();

var i = 0;
setInterval(() => {client.sendData(`Test ${i++}`)}, 3000);