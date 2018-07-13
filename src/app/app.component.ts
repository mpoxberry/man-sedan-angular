import { Component } from '@angular/core';
import { Car, Entry } from './car';
import { Chart} from 'angular-highcharts';
import { CalculateService } from './calculate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  chart: Chart;

  manSedan: Car = {
    name: 'Corolla',
    gasTankCapacity: 13.2,
    horsePower: 120,
    make: 'Toyota',
    year: '1998'
  };

  records: Entry[];
  mileage: any[];

  constructor(private calculateService: CalculateService) {
    this.setRecords();
    this.setMilage();
    console.log('this.setRecords');
    console.log(this.records);

    console.log('cost per gallon');
    console.log(this.calculateService.getCostPerGal(this.records));

    console.log('mileage');
    console.log(this.calculateService.getMilage(this.records));
  }

  ngOnInit() { 
   this.init();
  }

  setRecords(): void {
    this.records = this.calculateService.getData();
  }

  setMilage(): void {
    this.mileage = this.calculateService.getMilage(this.records)
  }

  init() {
    let chart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: 'Car Data'
      },
      credits: {
        enabled: false
      },
      series: [{
        name: "Milage",
        data: this.mileage
      }]
    });
    this.chart = chart;
  }
  // init() {
  //   let chart = new Chart({
  //     chart: {
  //       type: 'line'
  //     },
  //     title: {
  //       text: 'Linechart'
  //     },
  //     credits: {
  //       enabled: false
  //     },
  //     series: [{
  //       name: 'Line 1',
  //       data: [1, 2, 3]
  //     }]
  //   });
  //   this.chart = chart;

  //   chart.ref$.subscribe(console.log);
  // }
  // public count(records: any): number {
  //   let n: number = 0;

  //   records.forEach(e => {
  //     n++;
  //   });
  //   return n;
  // }
}
