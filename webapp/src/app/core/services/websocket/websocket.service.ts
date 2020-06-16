import { Injectable, isDevMode } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class WebsocketService {
    socket: any;

    constructor() {
        if (isDevMode()) this.socket = io.connect(`http://localhost:80/webapp`);
        else this.socket = io.connect(`http://${window.location.host}/webapp`);
    }

    getDataObsv(): Observable<any> {
        return Observable.create((observer) => {
            this.socket.on('dataset', (msg) => {
                observer.next(msg);
            });
        });
    }
}
