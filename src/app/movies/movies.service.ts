import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { IMovies } from './movies'


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
 private movieUrl = "movie/movie.json";
  constructor(private http: HttpClient) {}
    getMovies(): Observable<IMovies[]> {
        return  this.http.get<IMovies[]>(this.movieUrl).pipe(
          tap(data => console.log("Got the Movies Successfully")),
          catchError(this.handleError)
        );
    }

    getMovie(id: any): Observable<IMovies> {
      if (id === '') {
        return of(this.initializeProduct());
      }
      const url = `${this.movieUrl}/${id}`;
      return this.http.get<IMovies>(url)
        .pipe(
          tap(data => console.log('getMovies: ' + JSON.stringify(data))),
          catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
      let errorMessage = '';
      if (err.error instanceof ErrorEvent) {
        errorMessage = `An error occurred: ${err.error.message}`;
      } else {
        errorMessage = `Server returned code: ${err.status}, error message: ${err.message}`
      }
      console.error(errorMessage);
      return throwError(errorMessage);
    }

    
  private initializeProduct(): IMovies {
    // Return an initialized object
    return {
    Title: '',
    Rated: null,
    Year: null,
    Released: null,
    Runtime: null,
    Genre: null,
    Director: null,
    Writer: null,
    Actors: null,
    Plot: null,
    Language: null,
    Country: null,
    Awards: null,
    Poster: null
    };
  }
}
