Client = require('./client.js');
var sensor = require("node-dht-sensor");

client = new Client('http://192.168.0.23', '80');
client.connect();


//Sending Data intervally
setInterval(() => {
    sensor.read(22, 17, function(err, temperature, humidity) {
        if (!err) {
            client.sendData({
            'id' : 'Living Room',
            'data': [
                {
                    type: 'Temperature',
                    value: temperature
                },
                {
                    type: 'Humidity',
                    value: humidity
                }
            ]
            });
        }
        else {
            console.error(err);
        }
    });
}
, 60000);



