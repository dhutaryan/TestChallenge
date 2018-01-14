import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { People } from '../models/people';

@Injectable()
export class PeopleService {

  constructor(private http: HttpClient) { }

  getPeople(): Observable<People> {
    return <Observable<People>>this.http.get('https://swapi.co/api/people/');
  }

}
