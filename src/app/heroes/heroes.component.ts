import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HeroesService } from './heroes.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero } from '../models/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroesComponent implements OnInit {

  heroes$: Observable<Hero[]>;

  constructor(
    private heroesService: HeroesService,
  ) { }

  ngOnInit() {
    this.heroes$ = this.heroesService.getHeroes();
  }
}
