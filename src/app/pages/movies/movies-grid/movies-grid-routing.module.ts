import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesGridComponent } from './movies-grid.component';

const routes: Routes = [{path: '', component: MoviesGridComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesGridRoutingModule { }
