import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/interfaces/Movies.interface';
import { PopularTv } from 'src/app/interfaces/PopularTv.interface';
import { ResponseMovies } from 'src/app/interfaces/ResponseMovies.interface';
import { ResponsePopularTv } from 'src/app/interfaces/ResponsePopularTv.interface';
import { ResponseTrending, Result } from 'src/app/interfaces/ResponseTrending.interface';
import { TmdbService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private tmbdService: TmdbService) {
    
   }

  public popularMovies: Movies[]
  public popularTv: PopularTv[]
  public trending: Result[]
  public trendingFilter = []

  ngOnInit(): void {
    this.getTvPopular();
    this.getTrending();
  }

  public getTvPopular(): void{
    this.tmbdService.getPopularTv().subscribe( (res:ResponsePopularTv) => {
      this.popularTv = this.filterData([...res.results]);
    })
  }

  public getMoviePopular(): void{
    this.tmbdService.getPopularMovies(1).subscribe( (res:ResponseMovies) => {
      this.popularMovies = this.filterData([...res.results]);
    })
  }

  public getMoviesTrending(type:string):void{
    this.trendingFilter = []
    this.trendingFilter = this.trending.filter(movie => movie.media_type === type)
  }

  public getTrending(): void{
    this.tmbdService.getTrending().subscribe( (res:ResponseTrending) => {
     this.trending = [...res.results];
    })
  }

  private filterData(data: any[]): any[]{
    return data.filter( movie => movie.backdrop_path && movie.poster_path )
  }
}
