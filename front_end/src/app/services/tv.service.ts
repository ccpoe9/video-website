import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, ReplaySubject, Subject, throwError } from 'rxjs';
import { ConnectionConfig as config } from 'src/config/config';
import { Tv } from '../models/tv.model';
@Injectable({
  providedIn: 'root'
})
export class TvService {

  
  constructor(private http : HttpClient) { }

  getAllShows(httpParams : HttpParams) : Observable<any>{
    return this.http.get<any>(config.APIROOT+config.APIURLS.SHOWS, 
      {
        params : httpParams
      }).pipe(
        catchError((err) => {
          console.error(err);
          return throwError(err);
        })
      );  
  }

  getShow(url : string){
    return this.http.get<any>(config.APIROOT+config.APIURLS.SHOWS+decodeURIComponent(url))
    .pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }
  
  getShowSeason(httpParams : HttpParams) : Observable<any>{
    return this.http.get<any>(config.APIROOT+config.APIURLS.EPISODES,
      {
        params : httpParams
      }).pipe(
        catchError((err) => {
          console.error(err);
          return throwError(err);
        })
      );

  }

  createShow(show : any){
    console.log(show);
    return this.http.post(config.APIROOT+config.APIURLS.SHOWS, show)
    .pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }
}
