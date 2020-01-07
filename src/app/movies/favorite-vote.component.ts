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
              [style.color]="iconColor"
              (click)="onClick()"
              >
            </fa-icon>
  `
})
export class FavoriteVoteComponent implements OnInit {

  @Input() movie:IMovies;
  @Input() set voted(value) {
    this.iconColor = value ? 'red' : 'green';
  }
  @Output() vote = new EventEmitter<IMovies>();
  iconColor: string;



  constructor(library: FaIconLibrary,
              private favoriteService: FavoriteService) {
    library.addIcons(faHeart);
  }

  ngOnInit() { }

  onClick() {
    this.vote.emit(this.movie)
  }

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
