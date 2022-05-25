import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/interfaces/Movies.interface';
import { PopularTv } from 'src/app/interfaces/PopularTv.interface';
import { ResponseMovies } from 'src/app/interfaces/ResponseMovies.interface';
import { ResponsePopularTv } from 'src/app/interfaces/ResponsePopularTv.interface';
import { TmdbService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-slides-videos',
  templateUrl: './slides-videos.component.html',
  styleUrls: ['./slides-videos.component.scss']
})
export class SlidesVideosComponent implements OnInit {

  public videos: any[] = [];
  public popularMovies: Movies[] = [];
  constructor(private tmbdService: TmdbService) { }

  ngOnInit(): void {
    this.getMoviePopular();
  }

  private getVideosMovies(): void{
    this.popularMovies.forEach(movie => {
      this.getVideostvOrMovies(movie.id, 'es-ES', 'movie')
    })
  }

  public getMoviePopular(): void {
    this.tmbdService.getPopularMovies(1).subscribe((res: ResponseMovies) => {
      this.popularMovies = this.filterData([...res.results]);
      this.getVideosMovies();
    });
  }

  private filterData(data: any[]): any[] {
    return data.filter((movie) => movie.backdrop_path && movie.poster_path);
  }
  
  private getVideostvOrMovies(id: number, language: string, platform: string): void {
    this.tmbdService.getVideos(id, language, platform).subscribe((res) => {
      this.videos = [...this.videos, res.results];
      if (!res.results.length) {
        this.tmbdService.getVideos(id, 'en-US', platform).subscribe((res) => {
          //this.videos = [...this.videos, res.results];
        });
      }
    });
  }

}
