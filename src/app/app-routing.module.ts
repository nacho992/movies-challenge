import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomeModule)
  },
  {
    path: 'movies/:category',
    loadChildren: () => import('./pages/movies/movies-grid/movies-grid.module').then( m => m.MoviesGridModule)
  },
  {
    path: 'movies-details/:id/:media',
    loadChildren: () => import('./pages/movies/details/details.module').then( m => m.DetailsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
