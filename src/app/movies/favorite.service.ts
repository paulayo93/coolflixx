import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SessionStorageService } from 'ngx-webstorage';

import { IMovies } from './movies'


@Injectable({providedIn: 'root'})
export class FavoriteService {
  constructor(private httpClient: HttpClient,
              private storage: SessionStorageService) { }

  // addFavorite(title): void{

  //   return this.storage.store('favorite-movies', title);
  // };

  // getFavorite(title): Observable<IMovies[]>{
  //   return this.storage.retrieve(title);
  // }

  // removeFavorite(title: string): void {
  //   this.storage.clear(title);
  // }
}
