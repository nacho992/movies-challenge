import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlidesCardsComponent } from './slides-cards.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { CircleRatingModule } from '../circle-rating/circle-rating.module';


@NgModule({
  declarations: [SlidesCardsComponent,CardComponent],
  imports: [
    CommonModule,
    RouterModule,
    CircleRatingModule
  ],
  exports: [SlidesCardsComponent,CardComponent],
})
export class SlidesCardsModule { }
