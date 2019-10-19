import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMovies } from '../movies';
import { MoviesService } from '../movies.service';
// import { Title } from '@angular/platform-browser';


@Component({
  // selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.scss']
})
export class MoviesDetailComponent implements OnInit {
  pageTitle: string = 'Movie Detail';
  movie: IMovies;
  errorMessage: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private moviesService: MoviesService ) { }

  ngOnInit(): void {
    const title = +this.route.snapshot.paramMap.get('Title');
    this.getMovie(title);
  }
  getMovie(id) {
    this.moviesService.getMovie(id).subscribe({
      next: movie => this.onProductRetrieved(movie),
      error: err => this.errorMessage = err
    });
  }

  onProductRetrieved(movie: IMovies): void {
    this.movie = movie;

    if (this.movie) {
      this.pageTitle = `Product Detail: ${this.movie.Title}`;
    } else {
      this.pageTitle = 'No product found';
    }
  }
  onBack(): void {
    this.router.navigate(['/movies']);
  }

}
