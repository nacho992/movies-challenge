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
  private series$: BehaviorSubject<any> = new BehaviorSubject<any>(null)

  constructor(private http: HttpClient) { 
   }


   public get seriesSerivice(): Observable<any>{
     return this.series$.asObservable();
   }

   public detailsTv(id: number): Observable<DetailsTv> {
    return this.http.get<DetailsTv>(`${this.BASE_URL}tv/${id}?api_key=${this.API_KEY}&language=es-ES&page=1`).pipe(
        map( (data: DetailsTv): DetailsTv => {
          return data
        }) 
    )
  }

  public getCreditsTv(id: number): Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}tv/${id}/credits?api_key=${this.API_KEY}&language=es-ES`).pipe(
      map( (data: any): any => {
        return data
      }) 
  )
  }

  public seriesTopRate(page: number): Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}tv/top_rated?api_key=${this.API_KEY}&language=es-ES&page=${page}`).pipe(
      map( (data: any): any => {
        this.series$.next(data)
        return data
      }) 
  )
  }

  public getPopularSeries(page: number): Observable<ResponsePopularTv>{
    return this.http.get<ResponsePopularTv>(`${this.BASE_URL}tv/popular?api_key=${this.API_KEY}&language=es-ES&page=${page}`).pipe(
      map( (data: any): any => {
        this.series$.next(data)
        return data
      }) 
  )
  }

  public seriesAiringToday(page:number): Observable<any>{
    return this.http.get<ResponsePopularTv>(`${this.BASE_URL}tv/airing_today?api_key=${this.API_KEY}&language=es-ES&page=${page}`).pipe(
      map( (data: any): any => {
        this.series$.next(data)
        return data
      }) 
  )
  }

}