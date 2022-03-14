import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesCardComponent } from './series-card.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SeriesCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SeriesCardComponent
  ]
})
export class SeriesCardModule { }
