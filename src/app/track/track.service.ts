import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Track } from './track';
import { catchError } from 'rxjs/operators';

// import 'rxjs/add/Observable/map';
@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private errorMsg: string;
  private errorStatus: string;
  private errorBody: string;

  // private query: string;
  tracks: Array<Track>;
  id: number;
  trackObj: Track;
  springEndPoint: string;
  trackSubject: Observable<any>;
   private API_KEY: string;
   private API_URL: string;
  constructor(private http: HttpClient) {
    this.API_URL = 'http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=India';
     this.API_KEY = '&api_key=829b0ca1853c423a77519c004d01b844&format=json&limit=10';
     this.springEndPoint = 'http://localhost:8093/api/v1/';
  }
  public getTrackDetails(): Observable<Track[]> {
    return this.http.get<Track[]>(`${this.API_URL}${this.API_KEY}`);
     }

  getTracks() {
   return this.http.get(this.springEndPoint + 'track');
  }

  addTrackToWishList(track: Track) {
    console.log(track);
    return this.http
    .post(this.springEndPoint + 'track', track, { observe: 'response' });
  }
}
