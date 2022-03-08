import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/* ngrx */
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs"
import * as action from "../../reducers/actions/searchHistory.actions";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public ok: boolean = false
  public history$: Observable<string[]>
  public titles = []

  constructor(private router: Router, private store: Store<{ history: string[] }>) { 
    this.history$ = this.store.pipe(select('history'))
   }

  ngOnInit(): void {
  }

  public onSearch(value: string): void{
    if (value && value.length > 3 ) {
      this.addHistorySearch(value)
      this.router.navigate(['search-result'], {
        queryParams: { q: value }
      })
    }
  }

  public onHistorySearch(){
    this.history$.subscribe(res => {
      this.titles = res;
    })
  }

  private addHistorySearch(title: string): void{
    this.store.dispatch(action.add({title: title}))
  }

}
