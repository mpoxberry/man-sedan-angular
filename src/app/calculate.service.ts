import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CalculateService {
  [x: string]: any;

  constructor(private httpClient: HttpClient) { }

  count(entries: [any]) { 
    let n = 0;
    entries.forEach(element => {
      n++;
    });
    return n;
  }

  getData(): Observable<any> {
    console.log('in getData()');
    const apiUri = 'assets/corrola-data.json';
    return this.httpClient.get(apiUri);
  }
}
