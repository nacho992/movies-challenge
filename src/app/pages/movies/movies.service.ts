import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseMovies } from '../../interfaces/ResponseMovies.interface';
import { ResponseCredits } from '../../interfaces/responseCredits.interface';
import { DetailsMovie } from 'src/app/interfaces/DetailsMovie.interface';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private BASE_URL = environment.api_url
  private API_KEY = environment.api_key

  constructor(private http: HttpClient) { 
   }

  public getPopularMovies(page: number): Observable<ResponseMovies>{
    return this.http.get<ResponseMovies>(`${this.BASE_URL}movie/popular?api_key=${this.API_KEY}&language=es-ES&page=${page}`)
  }

  public moviesTopRate(page: number): Observable<ResponseMovies>{
    return this.http.get<ResponseMovies>(`${this.BASE_URL}movie/top_rated?api_key=${this.API_KEY}&language=es-ES&page=${page}`)
  }

  public moviesUpcoming(page: number): Observable<ResponseMovies>{
    return this.http.get<ResponseMovies>(`${this.BASE_URL}movie/upcoming?api_key=${this.API_KEY}&language=es-ES&page=${page}`)
  }

  public detailsMovie(id: number): Observable<DetailsMovie> {
    return this.http.get<DetailsMovie>(`${this.BASE_URL}movie/${id}?api_key=${this.API_KEY}&language=es-ES&page=1`)
  }

  public getCreditsMovie(id: number): Observable<ResponseCredits>{
    return this.http.get<ResponseCredits>(`${this.BASE_URL}movie/${id}/credits?api_key=${this.API_KEY}&language=es-ES`)}

}