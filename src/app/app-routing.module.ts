import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { MoviesComponent } from './movies/movies.component';
import { MoviesDetailComponent } from './movies/movies-detail/movies-detail.component';


const routes: Routes = [
  {path: 'movies', component: MoviesComponent},
  {path: '', redirectTo: 'movies', pathMatch: 'full'},
  {path: '**', redirectTo: 'movies', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
