import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Movies } from 'src/app/interfaces/Movies.interface';
import { TmdbService } from 'src/app/services/tmdb.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  movie$: Observable<any>
  error: boolean = false

  constructor(private route: ActivatedRoute,
              private tmdbService: TmdbService,
              private location: Location,
              private toastService: ToastService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id
    const media = this.route.snapshot.params.media
    console.log('IF',media,id)
    if (media === 'tv') {
      this.movie$ = this.tmdbService.detailsTv(id)
    }else{
      this.movie$ = this.tmdbService.detailsMovie(id)
    }
  
    //this.movie$ = this.tmdbService.detailsMovie(id)
    this.movie$.subscribe(res=>{
      this.error = false
    },
    err => {
      this.toastService.showDanger('Error de servidor, no hay recursos para esta peli')
      this.error = true
    })
    
  }

  public onBack(): void{
    this.location.back()
  }

}
