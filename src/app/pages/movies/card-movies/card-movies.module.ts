import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardMoviesComponent } from './card-movies.component';



@NgModule({
  declarations: [CardMoviesComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CardMoviesComponent
  ]
})
export class CardMoviesModule { }
