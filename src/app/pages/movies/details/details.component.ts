import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DetailsTv } from 'src/app/interfaces/DetailsTv.interface';
import { Cast, ResponseCredits } from 'src/app/interfaces/responseCredits.interface';
import { TmdbService } from 'src/app/services/tmdb.service';
import { ToastService } from 'src/app/services/toast.service';
import { DetailsModule } from './details.module';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  movie$: Observable<DetailsModule | DetailsTv>
  error: boolean = false
  credits: Cast[]

  constructor(private route: ActivatedRoute,
              private tmdbService: TmdbService,
              private location: Location,
              private toastService: ToastService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id
    const media = this.route.snapshot.params.media
    if (media === 'tv') {
      this.movie$ = this.tmdbService.detailsTv(id)
      this.movie$.subscribe(res=>{
        this.error = false
        console.log(res)
        this.tmdbService.getCreditsTv(id).subscribe((res: ResponseCredits)=>{
          this.credits = res.cast
        })
      },
      err => {
        this.toastService.showDanger('Error de servidor, no hay recursos para esta serie')
        this.error = true
      })
    }else{
      this.movie$ = this.tmdbService.detailsMovie(id)
      this.movie$.subscribe(res=>{
        console.log(res)
        this.error = false
        this.tmdbService.getCreditsMovie(id).subscribe((res: ResponseCredits)=>{
          this.credits = res.cast
        })
      },
      err => {
        this.toastService.showDanger('Error de servidor, no hay recursos para esta peli')
        this.error = true
      })
    }    
  }

  public onBack(): void{
    this.location.back()
  }

}
