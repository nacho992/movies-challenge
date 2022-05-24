import { Component, Input, OnInit } from '@angular/core';
import { DetailsTv } from 'src/app/interfaces/DetailsTv.interface';

@Component({
  selector: 'app-series-card',
  templateUrl: './series-card.component.html',
  styleUrls: ['./series-card.component.scss']
})
export class SeriesCardComponent implements OnInit {

  @Input() serie: DetailsTv
  public backdrop: string

  constructor() { }

  ngOnInit(): void {
  }

}
