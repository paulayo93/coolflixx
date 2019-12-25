import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { IMovies } from './movies';
import {
  FaIconLibrary
} from "@fortawesome/angular-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FavoriteService } from './favorite.service';
@Component({
  selector: 'favorite-vote',
  template: `
  <fa-icon
              [icon]="['fas', 'heart']"
              [classes]= "['float-right']"
              >
            </fa-icon>
  `
})
export class FavoriteVoteComponent implements OnInit {
  @Output() vote = new EventEmitter<IMovies>();
  movie: IMovies;

  favoriteList: IMovies[] = [];

  constructor(library: FaIconLibrary,
              private favoriteService: FavoriteService) {
    library.addIcons(faHeart);
  }

  ngOnInit() { }

  // addVote(title) {
  //   let availableFav = this.favoriteService.getFavorite(title);
  //   if (!!availableFav) {
  //     //  Push the new favorite to the array
  //     let addFav = this.favoriteService.addFavorite(title);

  //     return addFav
  //     //  Add the array of favorite to the session storage
  //     //  return the session storage( optional)
  //   }
  //   return null

  // }
}
