import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeriesGridComponent } from './series-grid.component';

const routes: Routes = [{path: '', component: SeriesGridComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeriesGridRoutingModule { }
