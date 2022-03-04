import { Component, Input, OnInit } from '@angular/core';
import { Movies } from 'src/app/interfaces/Movies.interface';
import { Result } from 'src/app/interfaces/ResponseTrending.interface';

@Component({
  selector: 'app-slides-cards',
  templateUrl: './slides-cards.component.html',
  styleUrls: ['./slides-cards.component.scss']
})
export class SlidesCardsComponent implements OnInit {

  @Input() popularMovies: Movies[] = [];
  @Input() trending: Result[] = [];

  constructor() { }

  ngOnInit(): void {

  }

}
