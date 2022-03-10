import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DetailsTv } from 'src/app/interfaces/DetailsTv.interface';
import { Cast, ResponseCredits } from 'src/app/interfaces/responseCredits.interface';
import { Result } from 'src/app/interfaces/ResponseVideos.interface';
import { TmdbService } from 'src/app/services/tmdb.service';
import { ToastService } from 'src/app/services/toast.service';
import { DetailsModule } from './details.module';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  movie$: Observable<DetailsModule | DetailsTv>
  error: boolean = false
  credits: Cast[]
  videos: Result[]

  constructor(private route: ActivatedRoute,
              private tmdbService: TmdbService,
              private location: Location,
              private toastService: ToastService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id
    const media = this.route.snapshot.params.media
    if (media === 'tv') {
      /* getTv details and cast */
      this.movie$ = this.tmdbService.detailsTv(id)
      this.movie$.subscribe(res=>{
        this.error = false
        this.tmdbService.getCreditsTv(id).subscribe((res: ResponseCredits)=>{
          this.credits = res.cast
        })
      },
      err => {
        this.toastService.showDanger('Error de servidor, no hay recursos para esta serie')
        this.error = true
      })
      this.getVideostvOrMovies(id, 'es-ES', 'tv')
    /* getMovies details and cast */
    }else{
      this.movie$ = this.tmdbService.detailsMovie(id)
      this.movie$.subscribe(res=>{
        this.error = false
        this.tmdbService.getCreditsMovie(id).subscribe((res: ResponseCredits)=>{
          this.credits = res.cast
        })
      },
      err => {
        this.toastService.showDanger('Error de servidor, no hay recursos para esta peli')
        this.error = true
      })
      this.getVideostvOrMovies(id, 'es-ES', 'movie')
    }    
  }

  private getVideostvOrMovies(id: number, language: string, platform: string){
    this.tmdbService.getVideos(id, language, platform).subscribe(res => {
      this.videos = res.results
      if (!this.videos.length) {
        this.tmdbService.getVideos(id, 'en-US',platform).subscribe(res => {
          this.videos = res.results
        })
      }
    })
  }

  public onBack(): void{
    this.location.back()
  }

}
