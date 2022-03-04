import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularRoutingModule } from './popular-routing.module';
import { PopularComponent } from './popular.component';
import { CardMoviesModule } from '../card-movies/card-movies.module';

@NgModule({
  declarations: [
    PopularComponent
  ],
  imports: [
    CommonModule,
    PopularRoutingModule,
    CardMoviesModule
  ]
})
export class PopularModule { }
