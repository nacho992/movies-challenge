import { Component, Input, OnInit } from '@angular/core';
import { Cast } from 'src/app/interfaces/responseCredits.interface';

@Component({
  selector: 'app-cast-slide',
  templateUrl: './cast-slide.component.html',
  styleUrls: ['./cast-slide.component.scss']
})
export class CastSlideComponent implements OnInit {

  @Input() cast: Cast[]

  constructor() { }

  ngOnInit(): void {
  }

}
