import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseMovies } from '../../interfaces/ResponseMovies.interface';
import { ResponseCredits } from '../../interfaces/responseCredits.interface';
import { Movies } from 'src/app/interfaces/Movies.interface';
import { DetailsMovie } from 'src/app/interfaces/DetailsMovie.interface';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private BASE_URL = environment.api_url
  private API_KEY = environment.api_key
  public movies$: BehaviorSubject<ResponseMovies> = new BehaviorSubject<ResponseMovies>(null);


  constructor(private http: HttpClient) { 
   }

  public get moviesInService(): Observable<ResponseMovies>{
    return this.movies$.asObservable();
  }

  public getPopularMovies(page: number): Observable<ResponseMovies>{
    return this.http.get<ResponseMovies>(`${this.BASE_URL}movie/popular?api_key=${this.API_KEY}&language=es-ES&page=${page}`).pipe(
        map( (data: ResponseMovies): ResponseMovies => {
            this.movies$.next(data)
            return data
        }) 
    )
  }

  public moviesTopRate(page: number): Observable<ResponseMovies>{
    return this.http.get<ResponseMovies>(`${this.BASE_URL}movie/top_rated?api_key=${this.API_KEY}&language=es-ES&page=${page}`).pipe(
        map( (data: ResponseMovies): ResponseMovies => {
            this.movies$.next(data)
            return data
        }) 
    )
  }

  public moviesUpcoming(page: number): Observable<ResponseMovies>{
    return this.http.get<ResponseMovies>(`${this.BASE_URL}movie/upcoming?api_key=${this.API_KEY}&language=es-ES&page=${page}`).pipe(
        map( (data: ResponseMovies): ResponseMovies => {
            this.movies$.next(data)
            return data
        }) 
    )
  }

  public detailsMovie(id: number): Observable<DetailsMovie> {
    return this.http.get<DetailsMovie>(`${this.BASE_URL}movie/${id}?api_key=${this.API_KEY}&language=es-ES&page=1`).pipe(
        map( (data: DetailsMovie): DetailsMovie => {
            return data
        }) 
    )
  }

  public getCreditsMovie(id: number): Observable<ResponseCredits>{
    return this.http.get<ResponseCredits>(`${this.BASE_URL}movie/${id}/credits?api_key=${this.API_KEY}&language=es-ES`).pipe(
      map( (data: ResponseCredits): ResponseCredits => {
          return data
      }) 
  )}

}