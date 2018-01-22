import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroesComponent implements OnInit {
  searchField: FormControl;
  heroes: Hero[];
  loading: boolean = false;

  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
    this.searchField = new FormControl();
    this.initHeroes();
  }

  initHeroes() {
    this.getHeroes()
      .concat(this.search())
      .subscribe((heroes: Hero[]) => this.heroes = heroes);
  }

  getHeroes() {
    this.loading = true;
    return this.heroesService.getHeroes()
      .finally(() => this.loading = false);
  }

  search() {
    return this.searchField.valueChanges
      .distinctUntilChanged()
      .debounceTime(300)
      .do(() => this.loading = true)
      .switchMap(searchTerm => this.heroesService.getHeroes(searchTerm))
      .do(() => this.loading = false)
      .catch(err => Observable.throw(err));
  }
}
