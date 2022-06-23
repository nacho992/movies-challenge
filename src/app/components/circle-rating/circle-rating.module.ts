import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleRatingComponent } from './circle-rating.component';

@NgModule({
  declarations: [CircleRatingComponent],
  imports: [
    CommonModule
  ],
  exports: [CircleRatingComponent]
})
export class CircleRatingModule { }