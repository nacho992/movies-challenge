import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle-rating',
  templateUrl: './circle-rating.component.html',
  styleUrls: ['./circle-rating.component.scss'],
})
export class CircleRatingComponent implements OnInit {
  @Input() rating: number;
  private green: string = '#3f0';
  private red: string = '#f00';
  private yellow: string = '#fff700';
  public colorSelected;

  constructor() {}

  ngOnInit(): void {
    this.colorSelected = this.getColorRating();
  }

  public getColorRating(): string {
    if (this.rating < 5) {
      console.log(this.red);
      return this.red;
    }
    if (this.rating >= 5 && this.rating <= 7) {
      return this.yellow;
    }
    if (this.rating >= 7) {
      return this.green;
    }
  }
}
