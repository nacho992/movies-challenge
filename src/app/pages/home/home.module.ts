import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { WelcomeSearchComponent } from 'src/app/components/welcome-search/welcome-search.component';
import { SlidesCardsModule } from 'src/app/components/slides-cards/slides-cards.module';
import { HomeRoutingModule } from './home-routing.module';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { SlidesVideosComponent } from 'src/app/components/slides-videos/slides-videos.component';
import { VideoModalModule } from 'src/app/components/video-modal/video-modal.module';


@NgModule({
  declarations: [
    WelcomeSearchComponent,
    HomeComponent,
    FooterComponent,
    SlidesVideosComponent
  ],

  imports: [
    VideoModalModule,
    CommonModule,
    SlidesCardsModule,
    HomeRoutingModule,
    NgbCarouselModule,
    RouterModule
  ],
  exports: []
})
export class HomeModule { }
