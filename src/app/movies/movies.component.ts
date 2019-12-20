import { Component, OnInit, EventEmitter} from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { IMovies } from "./movies";
import { MoviesService } from "./movies.service";

import { SessionStorageService } from 'ngx-webstorage';

@Component({
  // selector: 'app-movies',
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.scss"]
})
export class MoviesComponent implements OnInit {
  errorMessage: string;
  movies: IMovies[] = [];

  constructor(private moviesService: MoviesService,
              private storage: SessionStorageService,
              private route: ActivatedRoute) {}

  ngOnInit() {

    this.movies = this.route.snapshot.data['movies'];

    // this.moviesService.getMovies().subscribe({
    //   next: movies => {
    //     this.movies = movies
    //   },
    //   error: err => (this.errorMessage = err)
    // });

  }

  addFavorites(title: string) {
    this.storage.store('favorite', title)

  }
}
