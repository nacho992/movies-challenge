import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpcomingRoutingModule } from './upcoming-routing.module';
import { CardMoviesModule } from '../card-movies/card-movies.module';
import { UpcomingComponent } from './upcoming.component';


@NgModule({
  declarations: [UpcomingComponent],
  imports: [
    CommonModule,
    UpcomingRoutingModule,
    CardMoviesModule
  ]
})
export class UpcomingModule { }
