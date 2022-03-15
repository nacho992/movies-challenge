import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DetailsTv } from 'src/app/interfaces/DetailsTv.interface';
import { map } from 'rxjs/operators';
import { ResponsePopularTv } from 'src/app/interfaces/ResponsePopularTv.interface';


@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private BASE_URL = environment.api_url
  private API_KEY = environment.api_key

  constructor(private http: HttpClient) { 
   }


   public detailsTv(id: number): Observable<DetailsTv> {
    return this.http.get<DetailsTv>(`${this.BASE_URL}tv/${id}?api_key=${this.API_KEY}&language=es-ES&page=1`)
  }

  public getCreditsTv(id: number): Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}tv/${id}/credits?api_key=${this.API_KEY}&language=es-ES`)
  }

  public seriesTopRate(page: number): Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}tv/top_rated?api_key=${this.API_KEY}&language=es-ES&page=${page}`)
  }

  public getPopularSeries(page: number): Observable<ResponsePopularTv>{
    return this.http.get<ResponsePopularTv>(`${this.BASE_URL}tv/popular?api_key=${this.API_KEY}&language=es-ES&page=${page}`)
  }

  public seriesAiringToday(page:number): Observable<any>{
    return this.http.get<ResponsePopularTv>(`${this.BASE_URL}tv/airing_today?api_key=${this.API_KEY}&language=es-ES&page=${page}`)
  }

}