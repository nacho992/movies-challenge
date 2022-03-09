import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseMovies } from '../interfaces/ResponseMovies.interface';
import { ResponseTrending } from '../interfaces/ResponseTrending.interface';
import { ResponsePopularTv } from '../interfaces/ResponsePopularTv.interface';
import { ResponseCredits } from '../interfaces/responseCredits.interface';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  private BASE_URL = environment.api_url
  private API_KEY = environment.api_key
  private token = environment.token

  constructor(private http: HttpClient) { 
   }

  public getNowPlaying(): Observable<ResponseMovies>{
    return this.http.get<ResponseMovies>(`${this.BASE_URL}movie/now_playing?api_key=${this.API_KEY}&language=es-ES&page=1`)
  }

  public getPopularMovies(): Observable<ResponseMovies>{
    return this.http.get<ResponseMovies>(`${this.BASE_URL}movie/popular?api_key=${this.API_KEY}&language=es-ES&page=1`)
  }

  public getPopularTv(): Observable<ResponsePopularTv>{
    return this.http.get<ResponsePopularTv>(`${this.BASE_URL}tv/popular?api_key=${this.API_KEY}&language=es-ES&page=1`)
  }

  public searchMovie(title: string, page: number): Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}search/multi?api_key=${this.API_KEY}&language=es-ES&query=${title}&page=${page}&include_adult=false`)
  }

  public moviesTopRate(): Observable<ResponseMovies>{
    return this.http.get<ResponseMovies>(`${this.BASE_URL}movie/top_rated?api_key=${this.API_KEY}&language=es-ES&page=1`)
  }

  public moviesUpcoming(): Observable<ResponseMovies>{
    return this.http.get<ResponseMovies>(`${this.BASE_URL}movie/upcoming?api_key=${this.API_KEY}&language=es-ES&page=1`)
  }

  public getTrending(): Observable<ResponseTrending> {
    /* filter by media_type: movie | tv */
    return this.http.get<ResponseTrending>(`${this.BASE_URL}/trending/all/day?api_key=${this.API_KEY}&language=es-ES&page=1`)
  }

  public detailsMovie(id: number): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}movie/${id}?api_key=${this.API_KEY}&language=es-ES&page=1`)
  }

  public detailsTv(id: number): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}tv/${id}?api_key=${this.API_KEY}&language=es-ES&page=1`)
  }

  public getCreditsMovie(id: number): Observable<ResponseCredits>{
    return this.http.get<ResponseCredits>(`${this.BASE_URL}movie/${id}/credits?api_key=${this.API_KEY}&language=en-US`)
  }

  public getCreditsTv(id: number): Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}tv/${id}/credits?api_key=${this.API_KEY}&language=en-US`)
  }

  private setAuthorization(): HttpHeaders{
    const headers = new HttpHeaders({
     'Authorization' : `Bearer ${this.token}`,
     'Content-Type': 'application/json;charset=utf-8',
     'Access-Control-Allow-Origin' : "*",
     'method': 'GET, OPTIONS ',
     'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, Authorization, X-Request-With'
    })
    return headers
  }
}
