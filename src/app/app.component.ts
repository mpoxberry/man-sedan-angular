import { Component } from '@angular/core';
import { Car } from './car';

// test
import { HttpClient } from '@angular/common/http';

declare var require: any;
var json = require('./corolla-data.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  manSedan: Car = {
    name: 'Corolla',
    gasTankCapacity: 13.2,
    horsePower: 120,
    make: 'Toyota',
    year: '1998'
  };
  
  constructor(private httpClient: HttpClient) {
    console.log(this.count());
  }

  ngOnInit() {}

  public count():number {
    let n: number = 0;
    let a: [any] = json;
    a.forEach(element => {
      n++;
    });
    return n;
  }
}
