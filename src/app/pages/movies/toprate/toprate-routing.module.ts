import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToprateComponent } from './toprate.component';

const routes: Routes = [{path: '', component: ToprateComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToprateRoutingModule { }
