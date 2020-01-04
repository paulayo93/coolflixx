import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { MoviesService } from '../movies.service';


@Injectable({providedIn: 'root', })
export class MovieRouteActivator implements CanActivate {
  constructor(private moviesService: MoviesService,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const movieExists = !!this.moviesService.getMovie(+route.params['id']);

    if(!movieExists) {
      this.router.navigate([ '/404']);
    }
    return movieExists;
  }

}
