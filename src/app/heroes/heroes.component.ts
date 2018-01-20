import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HeroesService } from './heroes.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/finally';

import { Hero } from '../models/hero';
import { SpinnerService } from '../shared/spinner/spinner.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  searchField: FormControl;
  heroes$: Observable<Hero[]>;

  constructor(
    private heroesService: HeroesService,
    private spinnerService: SpinnerService,
  ) { }

  ngOnInit() {
    this.searchField = new FormControl();
    this.heroes$ = this.initHeroes();
  }

  initHeroes(): Observable<Hero[]> {
    return this.heroes().concat(this.search());
  }

  heroes() {
    this.spinnerService.enable();
    return this.heroesService.getHeroes()
      .finally(() => this.spinnerService.disable());
  }

  search() {
    return this.searchField.valueChanges
      .distinctUntilChanged()
      .debounceTime(300)
      .do(() => this.spinnerService.enable())
      .switchMap(query => this.heroesService.getHeroes(query))
      .do(() => this.spinnerService.disable())
      .catch(err => Observable.throw(err));
  }
}
