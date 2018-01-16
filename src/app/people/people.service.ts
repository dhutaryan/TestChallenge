import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { People } from '../models/people';
import { Person } from '../models/person';

@Injectable()
export class PeopleService {

  constructor(private http: HttpClient) { }

  getPeople(): Observable<Person[]> {
    return <Observable<Person[]>>this.http.get('https://swapi.co/api/people/')
      .map((data: People) => data.results);
  }
}
