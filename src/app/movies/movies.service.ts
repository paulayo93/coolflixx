import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { Observable, throwError, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";

import { IMovies } from "./movies";
import { appInit } from "ngx-webstorage";

@Injectable({
  providedIn: "root"
})
export class MoviesService {
  private moviesUrl = "api/movies";

  // private moviesUrl = "https://api.themoviedb.org/3/movie/550?api_key=cbebbf005c0d0e8065f0718936cd1ce6"
  constructor(private http: HttpClient) {}

  getMovies(): Observable<IMovies[]> {
    return this.http.get<IMovies[]>(this.moviesUrl).pipe(
      // tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getMovie(id: number): Observable<IMovies> {
    const url = `${this.moviesUrl}/${id}`;
    return this.http.get<IMovies>(url).pipe(
      tap(data => {
        console.log("Movie " + JSON.stringify(data));
      }),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = "";
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
