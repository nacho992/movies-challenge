import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesCardComponent } from './series-card.component';
import { RouterModule } from '@angular/router';
import { CircleRatingModule } from 'src/app/components/circle-rating/circle-rating.module';



@NgModule({
  declarations: [
    SeriesCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CircleRatingModule
  ],
  exports: [
    SeriesCardComponent
  ]
})
export class SeriesCardModule { }
