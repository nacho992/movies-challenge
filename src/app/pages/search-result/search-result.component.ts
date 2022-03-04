import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, take } from 'rxjs/operators';
import { TmdbService } from 'src/app/services/tmdb.service';
import { Movies } from 'src/app/interfaces/Movies.interface';
import { ResponseMovies } from 'src/app/interfaces/ResponseMovies.interface';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  private query: string = ''
  public movies: Movies[] = []
  constructor(
                private route: ActivatedRoute,
                private router: Router,
                private tmbdbService: TmdbService
  ) { }

  ngOnInit(): void {
    this.onUrlChanged()
  }

  private getMovieByQuery(): void {
  
    this.route.queryParams.pipe(take(1)).subscribe((params) => {
      this.query = params['q'];
      if (this.query !== undefined) {
        this.movies = [];
        this.tmbdbService
          .searchMovie(this.query)
          .pipe(take(1))
          .subscribe((res:ResponseMovies ) => {
            this.movies = [...res.results]
          });
      }
    });
  }

  private onUrlChanged(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        //reset
        this.getMovieByQuery()
      });
  }

  onGoBack(): void {
    this.router.navigateByUrl('home')
  }
}
