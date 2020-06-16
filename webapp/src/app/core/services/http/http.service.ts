import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class HttpService {
    constructor(private http: HttpClient) {}

    get(url: string) {}

    post(url: string) {}

    update(url: string) {}

    delete(url: string) {}

    errorHandler(err) {}
}
