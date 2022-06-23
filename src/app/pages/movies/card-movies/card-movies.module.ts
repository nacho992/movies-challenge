import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardMoviesComponent } from './card-movies.component';
import { RouterModule } from '@angular/router';
import { CircleRatingModule } from 'src/app/components/circle-rating/circle-rating.module';



@NgModule({
  declarations: [CardMoviesComponent],
  imports: [
    CommonModule,
    CircleRatingModule,
    RouterModule
  ],
  exports: [
    CardMoviesComponent,
  ]
})
export class CardMoviesModule { }
