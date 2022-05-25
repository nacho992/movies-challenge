import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Movies } from 'src/app/interfaces/Movies.interface';
import { ResponseMovies } from 'src/app/interfaces/ResponseMovies.interface';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies-grid',
  templateUrl: './movies-grid.component.html',
  styleUrls: ['./movies-grid.component.scss'],
})
export class MoviesGridComponent implements OnInit {
  public titlePage: string;
  public movies: Movies[] = [];
  public query = '';

  //by InfiniteScroll
  private moreData = true;
  private hideScrollHeight = 200;
  private showScrollHeight = 500;
  public showGoUpButton = false;
  private page = 1;
  public totalPage;
  /* ------------------ */

  constructor(
    private moviesService: MoviesService,
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
        this.titlePage = '';
        this.page = 1;
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
    this.moviesService.getPopularMovies(this.page).subscribe((res) => {
      this.updateThisMovies(res);
    });
  }

  private getTopRate() {
    this.moviesService.moviesTopRate(this.page).subscribe((res) => {
      this.updateThisMovies(res);
    });
  }

  private getUpComing() {
    this.moviesService.moviesUpcoming(this.page).subscribe((res) => {
      this.updateThisMovies(res);
    });
  }

  private updateThisMovies(movies: ResponseMovies) {
    this.stopMoreData(movies);
    this.movies = this.filterData([...this.movies, ...movies.results]);
  }

  private filterData(data: any[]): any[] {
    return data.filter((movie) => movie.backdrop_path && movie.poster_path);
  }

  //------INFINITE SCROLL-----------
  private stopMoreData(movies: ResponseMovies): void {
    this.totalPage = movies.total_pages;
    if (movies.total_pages === this.page) {
      this.moreData = false;
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
