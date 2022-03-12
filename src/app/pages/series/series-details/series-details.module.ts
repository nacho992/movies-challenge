import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesDetailsRoutingModule } from './series-details-routing.module';
import { SeriesDetailsComponent } from './series-details.component';
import { SlidesCardsModule } from 'src/app/components/slides-cards/slides-cards.module';
import { VideoModalModule } from 'src/app/components/video-modal/video-modal.module';


@NgModule({
  declarations: [
    SeriesDetailsComponent
  ],
  imports: [
    CommonModule,
    SeriesDetailsRoutingModule,
    SlidesCardsModule,
    VideoModalModule
  ]
})
export class SeriesDetailsModule { }
