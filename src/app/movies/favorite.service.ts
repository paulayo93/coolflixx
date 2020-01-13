import { Injectable } from "@angular/core";

import { IMovies } from "./movies";

@Injectable({ providedIn: "root" })
export class FavoriteService {
  favoriteList: IMovies[] = [];
  constructor() {}

  addFavorite(movie) {
    return this.favoriteList.push(movie);

    // return this.storage.store('favorite-movies', title);
  }

  getFavorite(movie) {
    // return this.storage.retrieve(title);
  }

  deleteFavorite(movie: IMovies) {
    return this.favoriteList.filter(
      currentMovie => currentMovie.id !== movie.id
    );
    // this.storage.clear(title);
  }

  hasVoted(movie: IMovies) {
    return this.favoriteList.some(id => id.id === movie.id);
  }
}
