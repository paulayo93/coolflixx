import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesDetailComponent } from './movies-detail/movies-detail.component';


const routes: Routes = [
  {path: 'movies/:Title',  component: MoviesDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
