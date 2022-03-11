import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesGridRoutingModule } from './movies-grid-routing.module';
import { MoviesGridComponent } from './movies-grid.component';
import { CardMoviesModule } from '../card-movies/card-movies.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [MoviesGridComponent],
  imports: [
    CommonModule,
    MoviesGridRoutingModule,
    CardMoviesModule,
    InfiniteScrollModule
  ]
})
export class MoviesGridModule { }
