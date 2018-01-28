import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero } from '../models/hero';

@Injectable()
export class HeroesService {
  constructor(private http: HttpClient) { }

  getHeroes(searchTerm, pageNumber): Observable<{count: number, heroes: Hero[]}> {
    let params: HttpParams = new HttpParams().set('page', pageNumber);

    if (searchTerm) {
      params = params.set('search', searchTerm);
    }
    
    return this.http.get(`https://swapi.co/api/people/`, { params })
      .map(this.transformResponse);
  }

  search(searchTerm) {
    return this.http.get(`https://swapi.co/api/people/?search=${searchTerm}`)
      .map(this.transformResponse);
  }

  private transformResponse(data) {
    return {
      count: data.count,
      heroes: data.results,
    };
  }
}
