import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularComponent } from './popular.component';
import { PopularRoutingModule } from './popular-routing.module';



@NgModule({
  declarations: [
    PopularComponent
  ],
  imports: [
    CommonModule,
    PopularRoutingModule
  ]
})
export class PopularModule { }
