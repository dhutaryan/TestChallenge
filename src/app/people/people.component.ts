import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
  providers: [PeopleService]
})
export class PeopleComponent implements OnInit {

  people: Observable<any>;

  constructor(private HttpService: PeopleService) { }

  ngOnInit() {
    this.people = this.HttpService.getPeople().map(data => data.results);
  }
}
