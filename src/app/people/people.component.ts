import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Person } from '../models/person';
import { SpinnerService } from '../shared/spinner/spinner.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
  providers: [PeopleService]
})
export class PeopleComponent implements OnInit {

  people: Person[];

  constructor(
    private peopleService: PeopleService,
    private spinnerService: SpinnerService,
  ) { }

  ngOnInit() {
    this.spinnerService.enable();
    this.peopleService.getPeople().subscribe(
      (data) => {
        this.spinnerService.disable();
        this.people = data
      },
      (err) => {
        this.spinnerService.disable();
      }
    );
  }
}
