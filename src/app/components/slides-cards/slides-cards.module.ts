import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlidesCardsComponent } from './slides-cards.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [SlidesCardsComponent,CardComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [SlidesCardsComponent,CardComponent],
})
export class SlidesCardsModule { }
