import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { WelcomeSearchComponent } from 'src/app/components/welcome-search/welcome-search.component';
import { SlidesCardsModule } from 'src/app/components/slides-cards/slides-cards.module';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [
    WelcomeSearchComponent,
    HomeComponent,
  ],

  imports: [
    CommonModule,
    SlidesCardsModule,
    HomeRoutingModule
  ],
  exports: []
})
export class HomeModule { }
