import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/';

import { Person } from '../models/person';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
  providers: [PeopleService]
})
export class PeopleComponent implements OnInit {

  people$: Observable<Person[]>;
  showSpinner: boolean = true;

  constructor(private PeopleService: PeopleService) { }

  ngOnInit() {
    this.people$ = this.PeopleService.getPeople();
  }
}
