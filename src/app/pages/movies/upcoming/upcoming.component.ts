import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/interfaces/Movies.interface';
import { ResponseMovies } from 'src/app/interfaces/ResponseMovies.interface';
import { TmdbService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss']
})
export class UpcomingComponent implements OnInit {

  public movies: Movies[] = []

  constructor(private tmdbService: TmdbService) { }

  ngOnInit(): void {
    this.tmdbService.moviesUpcoming().subscribe( (res: ResponseMovies) => {
      this.movies = res.results
    })
  }

}
