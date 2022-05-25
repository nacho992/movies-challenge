import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DetailsMovie } from 'src/app/interfaces/DetailsMovie.interface';

import { Cast } from 'src/app/interfaces/responseCredits.interface';
import { Result } from 'src/app/interfaces/ResponseVideos.interface';
import { TmdbService } from 'src/app/services/tmdb.service';
import { ToastService } from 'src/app/services/toast.service';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  movie$: Observable<DetailsMovie>;
  error: boolean = false;
  credits: Cast[];
  videos: Result[];

  constructor(
    private route: ActivatedRoute,
    private tmdbService: TmdbService,
    private moviesService: MoviesService,
    private location: Location,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.movie$ = this.moviesService.detailsMovie(id);
    this.movie$.subscribe(
      (res) => {
        this.error = false;
        this.tmdbService
          .getCreditsTvOrMovies(id, 'movie')
          .subscribe((res: Cast[]) => {
            this.credits = res;
          });
      },
      (err) => {
        this.toastService.showDanger(
          'Error de servidor, no hay recursos para esta peli'
        );
        this.error = true;
      }
    );
    this.getVideostvOrMovies(id, 'es-ES', 'movie');
  }

  private getVideostvOrMovies(id: number, language: string, platform: string) {
    this.tmdbService.getVideos(id, language, platform).subscribe((res) => {
      this.videos = res.results;
      if (!this.videos.length) {
        this.tmdbService.getVideos(id, 'en-US', platform).subscribe((res) => {
          this.videos = res.results;
        });
      }
    });
  }

  public onBack(): void {
    this.location.back();
  }
}
