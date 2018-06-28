import { Component } from '@angular/core';
import { Car, Entry } from './car';

import { CalculateService } from './calculate.service';

// import { corrola-data } from './corrla-data.json';

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


  constructor(private calculateService: CalculateService) {
    console.log(this.calculateService.getData());
  }

  // console.log(this.calculateService.getData());

  public getCount(entries: [any]) {
    return this.calculateService.count(entries);
  }
}
