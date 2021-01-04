import { Injectable } from '@angular/core';
import { WebsocketService } from '../../../core/services/websocket/websocket.service';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    private dataset = {};

    constructor(private websocket: WebsocketService) {
        websocket.getDataObsv().subscribe(({id, data}) => {    
            this.dataset[id] = data;
        });
    }

    isLoaded(): boolean {
        return Object.keys(this.dataset).length > 0;
    }

    getIds(): string[] {
        return Object.keys(this.dataset);
    }

    getTypes(id): string[] {
        return this.dataset[id].map(element => element.type);
    }

    getCurrentValue(id, type): number {
        let array = this.getArray(id, type);
        return array[array.length - 1];
    }

    getArray(id, type): number[] {
        return this.dataset[id].find(date => date.type === type).data;
    }

    getAverage(id: string, type: string): number {
        let array = this.getArray(id, type);
        return array.reduce((ret, x) => {
            return ret + x;
        }, 0) / array.length;
    }

    getMaximum(id: string, type: string): number {
        let array = this.getArray(id, type);
        return array.reduce((ret, x) => {
            return ret > x ? ret : x;
        }, 0);
    }

    getMinimum(id: string, type: string): number {
        let array = this.getArray(id, type);
        return array.reduce((ret, x) => {
            return ret < x ? ret : x;
        });
    }
}
