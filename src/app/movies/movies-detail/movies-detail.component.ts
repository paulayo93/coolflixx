import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IMovies } from "../movies";
import { MoviesService } from "../movies.service";
// import { Title } from '@angular/platform-browser';

@Component({
  // selector: 'app-movies-detail',
  templateUrl: "./movies-detail.component.html",
  styleUrls: ["./movies-detail.component.scss"]
})
export class MoviesDetailComponent implements OnInit {
  pageTitle: string = "Movie Detail";
  movie: IMovies;
  errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {

    this.movie = this.moviesService.getById
        (+this.route.snapshot.params['id']);
    // const id = this.route.snapshot.paramMap.get('id');
    // if (isNaN(+id)) {
    //   const message = `Product id was not a number: ${id}`;
    //   console.error(message);
    //   return;
    // }
    // this.getMovie(+id);
  }

  getMovie(title) {
    this.moviesService.getMovie(title).subscribe({
      next: movie => {
        this.movie = movie;
      },
      error: err => (this.errorMessage = err)
    });
  }

  onProductRetrieved(movie: IMovies): void{
    this.movie = movie;

    if (this.movie) {
      this.pageTitle = `Product Detail: ${this.movie.Title}`;
    } else {
      this.pageTitle = "No product found";
    }
  }
  onBack(): void {
    this.router.navigate(["/movies"]);
  }
}
