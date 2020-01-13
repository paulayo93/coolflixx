import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { IMovies } from "./movies";
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FavoriteService } from "./favorite.service";
@Component({
  selector: "favorite-vote",
  template: `
    <h5 class="position-absolute float-right p-2">
      <fa-icon
        [icon]="['fas', 'heart']"
        [classes]="['text-danger']"
        [style.color]="iconColor"
        (click)="onClick()"
      >
      </fa-icon>
    </h5>
  `,
  styles: []
})
export class FavoriteVoteComponent implements OnInit {
  @Input() movie: IMovies;
  @Input() set voted(value) {
    this.iconColor = value ? "red" : "green";
  }
  @Output() vote = new EventEmitter();
  iconColor: string;

  constructor(
    library: FaIconLibrary,
    private favoriteService: FavoriteService
  ) {
    library.addIcons(faHeart);
  }

  ngOnInit() {}

  onClick() {
    this.vote.emit(this.movie);
  }

}
