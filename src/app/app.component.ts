import { Component } from '@angular/core';
import { Car, Entry } from './car';

import { CalculateService } from './calculate.service';

// test


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

  records: any;

  constructor(private calculateService: CalculateService) {
    // this.setRecords();

    // console.log(this.records);

    // console.log(this.records[0]);

    // console.log('Count: ' + this.count(this.records));

  }

  ngOnInit() { }

  // setRecords(): void {
  //   this.calculateService.getData()
  //     .subscribe(records => this.records = records);
  // }

  // public count(records: any): number {
  //   let n: number = 0;

  //   records.forEach(e => {
  //     n++;
  //   });
  //   return n;
  // }
}
