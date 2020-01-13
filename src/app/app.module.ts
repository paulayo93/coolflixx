import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { InMemoryWebApiModule, InMemoryDbService } from 'angular-in-memory-web-api';

import {NgxWebstorageModule} from 'ngx-webstorage';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { NavbarComponent } from "./navbar/navbar.component";
import { Error404Component } from './errors/404.component';
import {
  MoviesModule,
  FavoriteVoteComponent,
  FavoriteService,
  MoviesComponent,
  MoviesDetailComponent,
} from './movies/index'
import { MovieData } from 'src/movie/movie-data';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FontAwesomeIconModule } from './core/fontawesomeicon/fontawesomeicon.module';



@NgModule({
  declarations: [AppComponent,
     NavbarComponent,
     MoviesDetailComponent,
     MoviesComponent,
     FavoriteVoteComponent
    //  Error404Component
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(MovieData),
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    MoviesModule,
    NgxWebstorageModule.forRoot(),
    AppRoutingModule,
    FontAwesomeModule,
    FontAwesomeIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
