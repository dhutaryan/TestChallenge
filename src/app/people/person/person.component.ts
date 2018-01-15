import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Person } from '../../models/person';

@Component({
  selector: '[app-person]',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input() person: Person;

  constructor() { }

  ngOnInit() {
      if (this.person.gender === 'male') {
        this.person.gender = 'Male';
      }

      if (this.person.gender === 'female') {
        this.person.gender = 'Female';
      }

      if (this.person.gender === 'n/a') {
        this.person.gender = 'Not available';
      }
  }
}
