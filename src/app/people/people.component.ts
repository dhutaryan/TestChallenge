import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero } from '../models/hero';
import { SpinnerService } from '../shared/spinner/spinner.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
  providers: [PeopleService]
})
export class PeopleComponent implements OnInit {

  heroes$: Observable<Hero[]>;

  constructor(
    private peopleService: PeopleService,
    private spinnerService: SpinnerService,
  ) { }

  ngOnInit() {
    this.heroes$ = this.peopleService.getPeople();
  }
}
