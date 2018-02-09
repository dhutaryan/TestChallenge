import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HeroesService } from './heroes.service';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/merge';

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
  totalHeroes: number;
  loading$ = new BehaviorSubject<boolean>(false);
  currentPage$ = new Subject<number>();
  currentPage: number;

  constructor(private heroesService: HeroesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.searchField = new FormControl();
    this.initHeroes();

    const page = parseInt(this.route.snapshot.queryParams.page) || 1;
    this.currentPage$.next(page);
    this.searchField.patchValue(this.route.snapshot.queryParams.search);
  }

  initHeroes() {
    this.getHeroes()
      .merge(this.search())
      .subscribe(({ count, heroes }: { count: number, heroes: Hero[] }) => {
        this.totalHeroes = count;
        this.heroes = heroes;
      });
  }

  getHeroes() {
    return this.currentPage$
      .distinctUntilChanged()
      .do(() => this.loading$.next(true))
      .do(page => {
        this.currentPage = page;
        this.setUrl(page, this.searchField.value)
      })
      .switchMap(page => this.heroesService.getHeroes(this.searchField.value, page))
      .do(() => this.loading$.next(false));
  }

  search() {
    return this.searchField.valueChanges
      .debounceTime(300)
      .distinctUntilChanged()
      .do(() => this.loading$.next(true))
      .switchMap(searchTerm => this.heroesService.search(searchTerm))
      .do(() => {
        this.currentPage = 1;
        this.setUrl(this.currentPage, this.searchField.value);
      })
      .do(() => this.loading$.next(false))
      .catch(err => Observable.throw(err));
  }

  setUrl(page, searchTerm) {
    if (!searchTerm) {
      searchTerm = '';
    }

    window.history.replaceState({}, '', `heroes?page=${page}&search=${searchTerm}`);
  }
}
