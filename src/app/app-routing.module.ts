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
    path: 'popular',
    loadChildren: () => import('./pages/movies/popular/popular.module').then( m => m.PopularModule)
  },
  {
    path: 'movies-details/:id',
    loadChildren: () => import('./pages/movies/details/details.module').then( m => m.DetailsModule)
  },
  {
    path: 'toprate',
    loadChildren: () => import('./pages/movies/toprate/toprate.module').then( m => m.ToprateModule)
  },
  {
    path: 'upcoming',
    loadChildren: () => import('./pages/movies/upcoming/upcoming.module').then( m => m.UpcomingModule)
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
