import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public ok: boolean = false

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public onSearch(value: string): void{
    if (value && value.length > 3 ) {
      this.router.navigate(['search-result'], {
        queryParams: { q: value }
      })
    }
  }

}
