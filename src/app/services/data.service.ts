import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DataService {
    dataUrl: string = '/data/data.js';
    constructor(public HttpClient: HttpClient) { }

    selected: any = {
        devices:[],
        protocols:[],
        times:[],

    };
    
    getData() {
        return this.HttpClient.get(this.dataUrl)
    }
} 