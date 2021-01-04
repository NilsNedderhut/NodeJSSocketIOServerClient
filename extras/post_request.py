import requests
import psutil
from time import sleep

url = 'http://localhost/api/data'
id = 'My Notebook'

while True:
    temp = psutil.sensors_temperatures().get('acpitz')[0][1]
    data = {
        'id': id,
        'data': [
            {
                'type': 'CPU Temperature',
                'value': temp
            }
        ]
    }
    requests.post(url=url, json=data)
    sleep(60)
