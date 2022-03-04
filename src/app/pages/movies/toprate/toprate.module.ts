import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToprateRoutingModule } from './toprate-routing.module';
import { ToprateComponent } from './toprate.component';


@NgModule({
  declarations: [
    ToprateComponent
  ],
  imports: [
    CommonModule,
    ToprateRoutingModule
  ]
})
export class ToprateModule { }
