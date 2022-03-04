import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { WelcomeSearchComponent } from 'src/app/components/welcome-search/welcome-search.component';
import { SlidesCardsModule } from 'src/app/components/slides-cards/slides-cards.module';
import { HomeRoutingModule } from './home-routing.module';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    WelcomeSearchComponent,
    HomeComponent,
  ],

  imports: [
    CommonModule,
    SlidesCardsModule,
    HomeRoutingModule,
    NgbCarouselModule,
    RouterModule
  ],
  exports: []
})
export class HomeModule { }
