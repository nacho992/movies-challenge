import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { Movies } from 'src/app/interfaces/Movies.interface';
import { ResponseMovies } from 'src/app/interfaces/ResponseMovies.interface';
import { TmdbService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-movies-grid',
  templateUrl: './movies-grid.component.html',
  styleUrls: ['./movies-grid.component.scss']
})
export class MoviesGridComponent implements OnInit {

  public titlePage: string

  public movies: Movies[] = []
  public movies$: BehaviorSubject<Movies[]> = new BehaviorSubject(null);

  public query = ''

  constructor(private tmdbService: TmdbService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getData()
    this.onUrlChanged()
  }

  private onUrlChanged(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        //reset
        this.movies = []
        this.movies$.next(this.movies)
        this.titlePage = ''
        this.getData()
      });
  }

  private getData(){
    const params = this.route.snapshot.params.category
    switch(params) { 
      case 'popular': { 
         console.log(params)
         this.getPopulars()
         this.titlePage = 'Todas las películas más populares'
         break; 
      } 
      case 'top-rate': { 
         this.getTopRate();
         this.titlePage = 'Mejores calificadas'
         break; 
      } 
      case 'upcoming': { 
         this.getUpComing();
         this.titlePage = 'Estrenos'
         break; 
      } 
    }
  }

  private getPopulars(){
    this.tmdbService.getPopularMovies().subscribe( (res:ResponseMovies) => {
      this.movies = res.results
      this.movies$.next(this.movies)
    })
  }

  private getTopRate(){
    this.tmdbService.moviesTopRate().subscribe( (res: ResponseMovies) => {
      this.movies = res.results
      this.movies$.next(this.movies)
    })
  }

  private getUpComing(){
    this.tmdbService.moviesUpcoming().subscribe( (res: ResponseMovies) => {
      this.movies = res.results
      this.movies$.next(this.movies)
    })
  }
}
