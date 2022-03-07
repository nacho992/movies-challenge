import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardMoviesComponent } from './card-movies.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CardMoviesComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CardMoviesComponent,
  ]
})
export class CardMoviesModule { }
