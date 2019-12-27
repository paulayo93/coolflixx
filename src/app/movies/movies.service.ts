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
  private movieUrl = "movie/movie.json";

  // private moviesUrl = "https://api.themoviedb.org/3/movie/550?api_key=cbebbf005c0d0e8065f0718936cd1ce6"
  constructor(private http: HttpClient) {}

  getMovies(): Observable<IMovies[]> {
    return this.http.get<IMovies[]>(this.movieUrl).pipe(
      // tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getById(id: number) {
    return API.find(movie => {
      return movie.id === id;
    });
  }

  getMovie(Title: string): Observable<IMovies> {
    const movieId = 'movie/movie.json/' + Title;
    const url = `${this.movieUrl}/${Title}`;
    return this.http.get<IMovies>(movieId).pipe(
      tap(data => console.log("getMovies: " + JSON.stringify(data))),
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

const API = [
  {
            "Title": "Baahubali: The Beginning",
            "id": 1,
            "Year": "2015",
            "Rated": "Not Rated",
            "Released": "09 Jul 2015",
            "Runtime": "159 min",
            "Genre": "Action, Drama",
            "Director": "S.S. Rajamouli",
            "Writer": "Vijayendra Prasad (story by), S.S. Rajamouli (screenplay by), C.H. Vijay Kumar (telugu dialogue), Ajay Kumar (telugu dialogue), Madhan Karky (tamil dialogue), Manoj Muntashir (hindi dialogue)",
            "Actors": "Prabhas, Rana Daggubati, Ramya Krishnan, Sathyaraj",
            "Plot": "When Sanga and her husband, part of a tribe living around the province of Mahismathi, save a drowning infant, little do they know the background of the infant or what the future holds for him. The kid grows up to as Shivudu, a free-spirit wanting to explore the mountains and in the process learns of his roots and then realizes the whole purpose of his life and ends up confronting the mighty Bhallala Deva!",
            "Language": "Telugu, Tamil, Hindi",
            "Country": "India",
            "Awards": "22 wins & 12 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYWVlMjVhZWYtNWViNC00ODFkLTk1MmItYjU1MDY5ZDdhMTU3XkEyXkFqcGdeQXVyODIwMDI1NjM@.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "8.1/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "87%"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "8.1",
            "imdbVotes": "94,499",
            "imdbID": "tt2631186",
            "Type": "movie",
            "DVD": "N/A",
            "BoxOffice": "N/A",
            "Production": "Arka Media Works",
            "Website": "http://baahubali.com/",
            "Response": "True"
        }
]
