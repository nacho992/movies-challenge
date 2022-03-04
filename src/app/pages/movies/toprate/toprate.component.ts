import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/interfaces/Movies.interface';
import { ResponseMovies } from 'src/app/interfaces/ResponseMovies.interface';
import { TmdbService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-toprate',
  templateUrl: './toprate.component.html',
  styleUrls: ['./toprate.component.scss']
})
export class ToprateComponent implements OnInit {

  public movies: Movies[] = []


  constructor(private tmdbService: TmdbService) { }

  ngOnInit(): void {
    this.tmdbService.moviesTopRate().subscribe( (res: ResponseMovies) => {
      this.movies = res.results
    })
  }

}
