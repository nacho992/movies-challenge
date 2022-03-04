import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToprateRoutingModule } from './toprate-routing.module';
import { ToprateComponent } from './toprate.component';
import { CardMoviesModule } from '../card-movies/card-movies.module';

@NgModule({
  declarations: [
    ToprateComponent
  ],
  imports: [
    CommonModule,
    ToprateRoutingModule,
    CardMoviesModule
  ]
})
export class ToprateModule { }
