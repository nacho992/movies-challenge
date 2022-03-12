import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesGridRoutingModule } from './series-grid-routing.module';
import { SeriesGridComponent } from './series-grid.component';


@NgModule({
  declarations: [
    SeriesGridComponent
  ],
  imports: [
    CommonModule,
    SeriesGridRoutingModule
  ]
})
export class SeriesGridModule { }
