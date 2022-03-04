import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/interfaces/Movies.interface';
import { ResponseMovies } from 'src/app/interfaces/ResponseMovies.interface';
import { TmdbService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-welcome-search',
  templateUrl: './welcome-search.component.html',
  styleUrls: ['./welcome-search.component.scss']
})
export class WelcomeSearchComponent implements OnInit {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  movies: Movies[] = []

  constructor(private tmdbService: TmdbService) { }

  ngOnInit(): void {
    this.tmdbService.getNowPlaying().subscribe( (res:ResponseMovies) => {
      this.movies = [...res.results]
    })
  }

}
