import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { ConnectionConfig as config } from 'src/config/config';
import { Genre } from '../models/genre.model';
import { Movie } from '../models/movie.model';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {


    constructor(private http : HttpClient) { }

  getAllMovies(httpParams : HttpParams) : Observable<any>{
    return this.http.get<any>(config.APIROOT+config.APIURLS.MOVIES, 
      {
        params : httpParams
      });  
  }

  getMovie(url : string){
    return this.http.get<Movie[]>(config.APIROOT+config.APIURLS.MOVIES+decodeURIComponent(url));
  }

  getGenres(){
    return this.http.get<Genre[]>(config.APIROOT+config.APIURLS.GENRES);
  }


}
