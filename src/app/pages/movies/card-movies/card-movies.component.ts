import { Component, Input, OnInit } from '@angular/core';
import { Movies } from 'src/app/interfaces/Movies.interface';

@Component({
  selector: 'app-card-movies',
  templateUrl: './card-movies.component.html',
  styleUrls: ['./card-movies.component.scss']
})
export class CardMoviesComponent implements OnInit {

  @Input() movie: Movies

  constructor() { }

  ngOnInit(): void {
  }

}
