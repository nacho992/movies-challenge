import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, take } from 'rxjs/operators';
import { TmdbService } from 'src/app/services/tmdb.service';
import { Movies } from 'src/app/interfaces/Movies.interface';
import { ResponseMovies } from 'src/app/interfaces/ResponseMovies.interface';
import { BehaviorSubject } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  private query: string = ''
  public movies: Movies[] = []
  public movies$: BehaviorSubject<Movies[]> = new BehaviorSubject(null);

  private moreData = true;
  private hideScrollHeight = 200;
  private showScrollHeight = 500;
  public showGoUpButton = false;
  private page = 1;
  public totalPage;
  
  constructor(
                private route: ActivatedRoute,
                private router: Router,
                private tmbdbService: TmdbService,
                @Inject(DOCUMENT) private document: Document,
  ) { }

  ngOnInit(): void {
    this.onUrlChanged()
    this.getMovieByQuery()
  }

  private getMovieByQuery(): void {
  
    this.route.queryParams.pipe(take(1)).subscribe((params) => {
      this.query = params['q'];
      if (this.query !== undefined) {
        this.tmbdbService
          .searchMovie(this.query, this.page)
          .pipe(take(1))
          .subscribe((res:ResponseMovies ) => {
            this.totalPage = res.total_pages
            if (res.total_pages === this.page) {
              this.moreData = false
            }
            this.movies = [ ...this.movies,...res.results]
            this.movies$.next(this.movies)
          });
      }
    });
  }

  private onUrlChanged(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        //reset
        this.moreData = true
        this.movies = [];
        this.page = 1;
        this.movies$.next(this.movies)
        this.getMovieByQuery()
      });
  }

  public onGoBack(): void {
    this.router.navigateByUrl('home')
  }

  //------INFINITE SCROLL-----------
  @HostListener('window:scroll', [])
  onWindowScroll():void {
    const yOffSet = window.pageYOffset;
    if ((yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) > this.showScrollHeight) {
      this.showGoUpButton = true;
    } else if (this.showGoUpButton && (yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) < this.hideScrollHeight) {
      this.showGoUpButton = false;
    }
  }

  onScrollDown():void{
    if (this.moreData) {
      this.page ++;
      this.getMovieByQuery();
    }
  }

  onScrollTop():void{
    this.document.body.scrollTop = 0; // Safari
    this.document.documentElement.scrollTop = 0; // Other
  }
}
