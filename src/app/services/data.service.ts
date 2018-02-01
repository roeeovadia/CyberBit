import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DataService {
    dataUrl: string = '/data/data.js';
    constructor(public HttpClient: HttpClient) { }

    onClear = new Subject();
    selected: any = {
        devices: [],
        protocols: [],
        times: [],

    };

    getData() {
        return this.HttpClient.get(this.dataUrl)
    }
} 