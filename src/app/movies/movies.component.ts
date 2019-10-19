import { Component, OnInit } from '@angular/core';
import { IMovies } from './movies';
import { MoviesService } from './movies.service';


@Component({
  // selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  errorMessage: string;
  movies: IMovies[] = [];


  constructor(private moviesService: MoviesService) { 
  }

  ngOnInit() {
   
    this.moviesService.getMovies().subscribe({
      next: movies => this.movies = movies,
      error: err => this.errorMessage = err
    });

  }
 
}
