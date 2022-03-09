import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesGridRoutingModule } from './movies-grid-routing.module';
import { MoviesGridComponent } from './movies-grid.component';
import { CardMoviesModule } from '../card-movies/card-movies.module';


@NgModule({
  declarations: [MoviesGridComponent],
  imports: [
    CommonModule,
    MoviesGridRoutingModule,
    CardMoviesModule
  ]
})
export class MoviesGridModule { }
