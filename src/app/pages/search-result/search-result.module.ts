import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchResultRoutingModule } from './search-result-routing.module';
import { SearchResultComponent } from './search-result.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from 'src/app/components/card/card.component';



@NgModule({
  declarations: [
    SearchResultComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    SearchResultRoutingModule,
    RouterModule
  ],
  exports: [
    SearchResultComponent,
 
  ]
})
export class SearchResultModule { }
