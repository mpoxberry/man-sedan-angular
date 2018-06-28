import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Record } from './car';
import { Observable, of } from 'rxjs';

// test
// declare var require: any;
// var json = require('./corolla-data.json');

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    console.log(this.http.get('./assets/corolla-data.json').pipe(res => { return res }));
    return this.http.get('./assets/corolla-data.json');
  }

  // getRecords(): [Record] {
  //   let r: [Record] = json;
  //   return r;
  // }

}
