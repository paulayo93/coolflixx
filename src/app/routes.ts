import { Routes } from '@angular/router';

import {
  MoviesComponent,
  MoviesDetailComponent ,
  MoviesResolver,
  MovieRouteActivator
} from './movies/index';

import { Error404Component } from './errors/404.component';



export const routes: Routes = [
  {path: "movies/:id",  component: MoviesDetailComponent},
  { path: "movies", component: MoviesComponent,
    resolve: {movies: MoviesResolver} },
  { path: "", redirectTo: "movies", pathMatch: "full" },
  // {path: '404', component: Error404Component},
  { path: "**", redirectTo: "movies", pathMatch: "full" },
];
