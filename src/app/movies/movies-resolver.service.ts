import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MoviesService } from './movies.service';


@Injectable({ providedIn: 'root' })
export class MoviesResolver implements Resolve<any> {

  constructor(private moviesService: MoviesService){}

  resolve(route: ActivatedRouteSnapshot)  {
    return this.moviesService.getMovies()
      .pipe(
        map(( movies => movies))
      )
  }
}
