import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class UtilityService {
    constructor() {}

    round(value: number, decimal: number): number {
        var factor = Math.pow(10, decimal);
        return Math.floor(value * factor) / factor;
    }
}
