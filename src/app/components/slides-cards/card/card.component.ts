import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movies } from 'src/app/interfaces/Movies.interface';
import { Result } from 'src/app/interfaces/ResponseTrending.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  popularMovie$: BehaviorSubject<Movies> = new BehaviorSubject(null);
  trending$: BehaviorSubject<Result> = new BehaviorSubject(null);
  @Input() popularMovies: Movies;
  @Input() trending: Result;

  constructor() { }

  ngOnInit(): void {
    this.popularMovie$.next(this.popularMovies)
    this.trending$.next(this.trending)
  }

}
