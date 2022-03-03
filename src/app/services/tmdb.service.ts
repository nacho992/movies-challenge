import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  private BASE_URL = environment.api_url
  private API_KEY = environment.api_key
  private token = environment.token

  constructor(private http: HttpClient) { }

  public getNowPlaying(): Observable<any>{
    const headers = this.setAuthorization();
    return this.http.get<any>(`${this.BASE_URL}movie/now_playing?api_key=${this.API_KEY}&language=es-ES&page=1`)
  }

  private setAuthorization(): HttpHeaders{
    const headers = new HttpHeaders({
     'Authorization' : `Bearer ${this.token}`,
     'Content-Type': 'application/json;charset=utf-8',
     'Access-Control-Allow-Origin' : "*",
     'method': 'GET',
    })
    return headers
  }
}
