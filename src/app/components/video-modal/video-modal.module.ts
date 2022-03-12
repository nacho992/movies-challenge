import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrailersComponent } from './trailers/trailers.component';



@NgModule({
  declarations: [TrailersComponent],
  imports: [
    CommonModule
  ],
  exports: [TrailersComponent]
})
export class VideoModalModule { }
