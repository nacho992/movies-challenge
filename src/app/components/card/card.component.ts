import { Component, Input, OnInit } from '@angular/core';
import { Movies } from 'src/app/interfaces/Movies.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() movie: Movies

  constructor() { }

  ngOnInit(): void {
  }

}
