import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-series-grid',
  templateUrl: './series-grid.component.html',
  styleUrls: ['./series-grid.component.scss']
})
export class SeriesGridComponent implements OnInit {

  public titlePage: string;
  public series: any[] = [];
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
    private seriesService: SeriesService,
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
        this.series = [];
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
        this.titlePage = 'Series más populares';
        break;
      }
      case 'top-rate': {
        this.getTopRate();
        this.titlePage = 'Mejores calificadas';
        break;
      }
      case 'airing-today': {
        this.getAiringToday();
        this.titlePage = 'Transmitiendo hoy!';
        break;
      }
    }

  }

  private getPopulars() {
    this.seriesService.getPopularSeries(this.page).subscribe(res => {
      this.updateThisMovies();
    })
  }

  private getTopRate() {
    this.seriesService.seriesTopRate(this.page).subscribe(res => {
      this.updateThisMovies();
    })
  }

  private getAiringToday() {
    this.seriesService.seriesAiringToday(this.page).subscribe(res => {
      this.updateThisMovies();
    })
  }

  private updateThisMovies(){
    this.seriesService.seriesSerivice.subscribe(data => {
      this.stopMoreData(data);
      this.series = [...this.series, ...data.results];
    })
  }

  //------INFINITE SCROLL-----------
  private stopMoreData(series: any): void{
    this.totalPage = series.total_pages
    if (series.total_pages === this.page) {
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
