import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HeroesService } from './heroes.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/concat';

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
    return this.heroesService.getHeroes().concat(this.search());
  }

  search() {
    return this.searchField.valueChanges
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(query => this.heroesService.getHeroes(query));
  }
}
