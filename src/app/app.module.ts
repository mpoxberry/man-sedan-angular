import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule } from 'angular-highcharts';

import { AppComponent } from './app.component';
import { CalculateService } from './calculate.service';

@NgModule({
  imports: [
    BrowserModule,
    ChartModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [CalculateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
