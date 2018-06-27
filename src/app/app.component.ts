import { Component } from '@angular/core';
import { Car } from './car';


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
  
  constructor() {}
}
