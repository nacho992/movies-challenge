import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DetailsTv } from 'src/app/interfaces/DetailsTv.interface';
import { Cast, ResponseCredits } from 'src/app/interfaces/responseCredits.interface';
import { Result } from 'src/app/interfaces/ResponseVideos.interface';
import { TmdbService } from 'src/app/services/tmdb.service';
import { ToastService } from 'src/app/services/toast.service';
import { Location } from '@angular/common';
import { SeriesService } from '../series.service';


@Component({
  selector: 'app-series-details',
  templateUrl: './series-details.component.html',
  styleUrls: ['./series-details.component.scss']
})
export class SeriesDetailsComponent implements OnInit {

  serie$: Observable<DetailsTv>;
  error: boolean = false;
  credits: Cast[];
  videos: Result[];

  constructor(
    private route: ActivatedRoute,
    private tmdbService: TmdbService,
    private seriesService: SeriesService,
    private location: Location,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.serie$ = this.seriesService.detailsTv(id);
    this.serie$.subscribe(
      (res) => {
        this.error = false;
        this.tmdbService
          .getCreditsTvOrMovies(id, 'tv')
          .subscribe((res: ResponseCredits) => {
            this.credits = res.cast;
          });
      },
      (err) => {
        this.toastService.showDanger(
          'Error de servidor, no hay recursos para esta peli'
        );
        this.error = true;
      }
    );
    this.getVideostvOrseries(id, 'es-ES', 'tv');
  }

  private getVideostvOrseries(id: number, language: string, platform: string) {
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
