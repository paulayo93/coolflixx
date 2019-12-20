import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MoviesDetailComponent } from "./movies-detail/movies-detail.component";
import { FavoriteVoteComponent } from './favorite-vote.component'

@NgModule({
  declarations: [
    MoviesDetailComponent,

  ],
  imports: [CommonModule]
})
export class MoviesModule {}
