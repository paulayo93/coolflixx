import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SessionStorageService } from 'ngx-webstorage';

import { IMovies } from './movies'


@Injectable({providedIn: 'root'})
export class FavoriteService {

  favoriteList: IMovies[] = [];
  constructor(private httpClient: HttpClient,
              private storage: SessionStorageService) { }

  addFavorite(movie){

    return this.favoriteList.push(movie);

    // return this.storage.store('favorite-movies', title);
  };

  getFavorite(movie) {

    // return this.storage.retrieve(title);
  }

  deleteFavorite(movie: IMovies) {
    this.favoriteList.filter(currentMovie => currentMovie.id !== movie.id);
    // this.storage.clear(title);
  }

  hasVoted(movie: IMovies){
    return this.favoriteList.some(id => id.id === movie.id);
  }


}
