import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Movies } from 'src/app/interfaces/Movies.interface';
import { TmdbService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  movie$: Observable<Movies>

  constructor(private route: ActivatedRoute, private tmdbService: TmdbService) { }

  ngOnInit(): void {
    this.route.params.pipe().subscribe( param => {
      const id = param['id']
      this.movie$ = this.tmdbService.detailsMovie(id)
      this.movie$.subscribe(res=>{
        console.log(res)
      })
    })
  }

}
