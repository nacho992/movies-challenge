import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';
import { AlertToastlModule } from 'src/app/components/alert-toast/alert-toast.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertToastComponent } from 'src/app/components/alert-toast/alert-toast.component';
import { CastSlideComponent } from './cast-slide/cast-slide.component';
import { TrailersComponent } from './trailers/trailers.component';


@NgModule({
  declarations: [
    DetailsComponent,
    AlertToastComponent,
    CastSlideComponent,
    TrailersComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    AlertToastlModule,
    NgbModule
  ]
})
export class DetailsModule { }
