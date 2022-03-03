import { Component, OnInit } from '@angular/core';
import { ResponseMovies } from 'src/app/interfaces/ResponseMovies.interface';
import { TmdbService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private tmbdService: TmdbService) { }

  ngOnInit(): void {
    this.tmbdService.getNowPlaying().subscribe( (res:ResponseMovies) => {
      console.log(res)
    })

    this.tmbdService.getPopularList().subscribe( (res:ResponseMovies) => {
      console.log(res)
    })
  }

}
