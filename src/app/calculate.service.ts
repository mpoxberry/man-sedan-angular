import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Record, Entry } from './car';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

// test
declare var require: any;
var json = require('../assets/corolla-data.json');

@Injectable()
export class CalculateService {

  constructor() { }

  getData(): any {

    let entries: Entry[];
    entries = json;
    return entries;
    // let o : Observable<any>;
    // return this.http.get<Entry>('http://localhost:4200/assets/corolla-data.json');
  }

  getCostPerGal(entries: Entry[]): any {
    var costPerGalHistory: number[] = [];
    entries.forEach(e => {
      costPerGalHistory.push(e.costPerGallon);
    })
    return costPerGalHistory;
  };

  getMilage(entries: Entry[]): any {
    var mileageHistory: number[] = [];
    entries.forEach(e => {
      mileageHistory.push(e.mileage);
    })
    return mileageHistory;
  };

  fixData(data: any[]): any {
    var output: any[] = [];
    data.forEach(d => {
      if (d === '--') {
        d = 0;
      }
    })
    return data;
  }
}
