import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero } from '../models/hero';

@Injectable()
export class PeopleService {

  constructor(private http: HttpClient) { }

  getPeople(): Observable<Hero[]> {
    return this.http.get('https://swapi.co/api/people/')
      .map((data: any) => data.results);
  }
}
