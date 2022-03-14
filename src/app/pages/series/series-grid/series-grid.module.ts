import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesGridRoutingModule } from './series-grid-routing.module';
import { SeriesGridComponent } from './series-grid.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SeriesCardModule } from '../series-card/series-card.module';


@NgModule({
  declarations: [
    SeriesGridComponent
  ],
  imports: [
    CommonModule,
    SeriesGridRoutingModule,
    InfiniteScrollModule,
    SeriesCardModule
  ]
})
export class SeriesGridModule { }
