import { Component, OnInit, EventEmitter} from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { IMovies } from "./movies";
import { MoviesService } from "./movies.service";

import { SessionStorageService } from 'ngx-webstorage';
import { faTimes, faSearch, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  // selector: 'app-movies',
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.scss"]
})
export class MoviesComponent implements OnInit {
  errorMessage: string;

  _movieFilter = '';
  get movieFilter(): string {
    return this._movieFilter;
  }
  set movieFilter(value: string) {
    this._movieFilter = value;
    this.filteredMovies = this.movieFilter? this.performFilter(this.movieFilter) : this.movies;
  }

  movies: IMovies[] = [];
  filteredMovies: IMovies[] = [];

  constructor(private moviesService: MoviesService,
              private storage: SessionStorageService,
              private route: ActivatedRoute,
              library: FaIconLibrary) {
                library.addIcons(faSearch, faHeart);
              }



    performFilter(filterBy: string): IMovies[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.movies.filter((movies: IMovies) =>
          movies.Title.toLocaleLowerCase().indexOf(filterBy) !== -1);

    }

  ngOnInit() {

   // this.movies = this.route.snapshot.data['movies'];

    this.moviesService.getMovies().subscribe({
      next: movies => {
        this.movies = movies
        this.filteredMovies = this.movies
      },
      error: err => (this.errorMessage = err)
    });

  }

  addFavorites(title: string) {
    this.storage.store('favorite', title)

  }
}
