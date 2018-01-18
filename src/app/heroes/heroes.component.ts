import { Component, OnInit } from '@angular/core';
import { HeroesService } from './heroes.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero } from '../models/hero';
import { SpinnerService } from '../shared/spinner/spinner.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {

  heroes$: Observable<Hero[]>;

  constructor(
    private heroesService: HeroesService,
    private spinnerService: SpinnerService,
  ) { }

  ngOnInit() {
    this.heroes$ = this.heroesService.getHeroes();
  }
}
