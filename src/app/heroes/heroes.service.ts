import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero } from '../models/hero';

@Injectable()
export class HeroesService {
  private params: HttpParams = new HttpParams();

  constructor(private http: HttpClient) { }

  getHeroes(searchTerm, pageNumber): Observable<{count: number, heroes: Hero[]}> {
    if (searchTerm) {
      this.params = this.params.set('search', searchTerm);
    }
    
    this.params = this.params.set('page', pageNumber);
    
    return this.http.get(`https://swapi.co/api/people/`, { params: this.params } )
      .map((data: any) => ({
        count: data.count,
        heroes: data.results
      }));
  }

  search(searchTerm) {
    this.params = this.params.set('search', searchTerm);

    return this.http.get(`https://swapi.co/api/people/`, { params: this.params })
      .map((data: any) => ({
        count: data.count,
        heroes: data.results
      }));
  }
}
