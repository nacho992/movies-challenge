import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';
import { AlertToastlModule } from 'src/app/components/alert-toast/alert-toast.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertToastComponent } from 'src/app/components/alert-toast/alert-toast.component';
import { SlidesCardsModule } from 'src/app/components/slides-cards/slides-cards.module';
import { VideoModalModule } from 'src/app/components/video-modal/video-modal.module';


@NgModule({
  declarations: [
    DetailsComponent,
    AlertToastComponent,
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    AlertToastlModule,
    SlidesCardsModule,
    VideoModalModule,
    NgbModule
  ]
})
export class DetailsModule { }
