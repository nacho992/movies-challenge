import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { Movies } from 'src/app/interfaces/Movies.interface';
import { ResponseMovies } from 'src/app/interfaces/ResponseMovies.interface';
import { TmdbService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-movies-grid',
  templateUrl: './movies-grid.component.html',
  styleUrls: ['./movies-grid.component.scss'],
})
export class MoviesGridComponent implements OnInit {
  public titlePage: string;
  public movies: Movies[] = [];
  public query = '';
  public movies$: BehaviorSubject<Movies[]> = new BehaviorSubject(null);

  //by InfiniteScroll
  private moreData = true;
  private hideScrollHeight = 200;
  private showScrollHeight = 500;
  public showGoUpButton = false;
  private page = 1;
  public totalPage;
 /* ------------------ */

  constructor(
    private tmdbService: TmdbService,
    private route: ActivatedRoute,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.getData();
    this.onUrlChanged();
  }

  private onUrlChanged(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        //reset
        this.movies = [];
        this.movies$.next(this.movies);
        this.titlePage = '';
        this.page = 1
        this.getData();
      });
  }

  private getData() {
    const params = this.route.snapshot.params.category;
    switch (params) {
      case 'popular': {
        this.getPopulars();
        this.titlePage = 'Todas las películas más populares';
        break;
      }
      case 'top-rate': {
        this.getTopRate();
        this.titlePage = 'Mejores calificadas';
        break;
      }
      case 'upcoming': {
        this.getUpComing();
        this.titlePage = 'Estrenos';
        break;
      }
    }
  }

  private getPopulars() {
    this.tmdbService.getPopularMovies(this.page).subscribe((res: ResponseMovies) => {
      this.stopMoreData(res);
      this.movies = [...this.movies, ...res.results];
      this.movies$.next(this.movies);
    });
  }

  private getTopRate() {
    this.tmdbService.moviesTopRate(this.page).subscribe((res: ResponseMovies) => {
      this.stopMoreData(res);
      this.movies = [...this.movies, ...res.results];
      this.movies$.next(this.movies);
    });
  }

  private getUpComing() {
    this.tmdbService.moviesUpcoming(this.page).subscribe((res: ResponseMovies) => {
      this.stopMoreData(res);
      this.movies = [...this.movies, ...res.results];
      this.movies$.next(this.movies);
    });
  }

  //------INFINITE SCROLL-----------
  private stopMoreData(res: ResponseMovies): void{
    this.totalPage = res.total_pages
    if (res.total_pages === this.page) {
      this.moreData = false
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const yOffSet = window.pageYOffset;
    if (
      (yOffSet ||
        this.document.documentElement.scrollTop ||
        this.document.body.scrollTop) > this.showScrollHeight
    ) {
      this.showGoUpButton = true;
    } else if (
      this.showGoUpButton &&
      (yOffSet ||
        this.document.documentElement.scrollTop ||
        this.document.body.scrollTop) < this.hideScrollHeight
    ) {
      this.showGoUpButton = false;
    }
  }

  onScrollDown(): void {
    if (this.moreData) {
      this.page++;
      this.getData();
    }
  }

  onScrollTop(): void {
    this.document.body.scrollTop = 0; // Safari
    this.document.documentElement.scrollTop = 0; // Other
  }
}
