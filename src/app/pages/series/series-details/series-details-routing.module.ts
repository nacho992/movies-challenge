import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeriesDetailsComponent } from './series-details.component';

const routes: Routes = [{path: '', component: SeriesDetailsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeriesDetailsRoutingModule { }
