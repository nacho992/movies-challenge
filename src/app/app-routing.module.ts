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
    path: 'movies-details/:id',
    loadChildren: () => import('./pages/movies/details/details.module').then( m => m.DetailsModule)
  },
  {
    path: 'series-details/:id',
    loadChildren: () => import('./pages/series/series-details/series-details.module').then( m => m.SeriesDetailsModule)
  },
  {
    path: 'search-result',
    loadChildren: () => import('./pages/search-result/search-result.module').then( m => m.SearchResultModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
