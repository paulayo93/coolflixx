import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


import {NgxWebstorageModule} from 'ngx-webstorage';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { NavbarComponent } from "./navbar/navbar.component";
import { Error404Component } from './errors/404.component';
import {
  MoviesComponent,
  MoviesModule,
  FavoriteVoteComponent,
} from './movies/index'



@NgModule({
  declarations: [AppComponent,
     NavbarComponent,
     MoviesComponent,
     FavoriteVoteComponent,
     Error404Component
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    MoviesModule,
    NgxWebstorageModule.forRoot(),
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
