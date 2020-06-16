import { Injectable } from '@angular/core';
import { WebsocketService } from '../../../core/services/websocket/websocket.service';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    private dataset = {};

    constructor(private websocket: WebsocketService) {
        websocket.getDataObsv().subscribe((res) => {
            this.dataset[res.id] = res.data;
        });
    }

    isLoaded(): boolean {
        return Object.keys(this.dataset).length > 0;
    }

    getIds(): string[] {
        return Object.keys(this.dataset);
    }

    getTypes(id): string[] {
        return Object.keys(this.dataset[id]);
    }

    getCurrentValues(id): any {
        var dataTypes = this.getTypes(id);
        var ret = [];
        dataTypes.forEach((dataType) => {
            var value = this.dataset[id][dataType][
                this.dataset[id][dataType].length - 1
            ];
            ret.push({ id: dataType, value: value });
        });
        return ret;
    }

    getCurrentValue(id, type): number {
        return this.dataset[id][type][this.dataset[id][type].length - 1];
    }

    getArray(id, type): number[] {
        return this.dataset[id][type];
    }

    getAverage(id: string, type: string): number {
        return (
            this.dataset[id][type].reduce((ret, x) => {
                return ret + x;
            }, 0) / this.dataset[id][type].length
        );
    }

    getMaximum(id: string, type: string): number {
        return this.dataset[id][type].reduce((ret, x) => {
            return ret > x ? ret : x;
        }, 0);
    }

    getMinimum(id: string, type: string): number {
        return this.dataset[id][type].reduce((ret, x) => {
            return ret < x ? ret : x;
        });
    }
}
