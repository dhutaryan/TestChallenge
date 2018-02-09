import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/observable/range';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnChanges {
  @Input() totalHeroes: number;
  @Input() currentPage$: BehaviorSubject<number>;
  @Input() currentPage: number;

  private pageList$: Observable<number[]>;
  private pageSize: number = 10;

  constructor() { }

  ngOnChanges({ totalHeroes, currentPage }: SimpleChanges) {
    if (currentPage && currentPage.currentValue
      || totalHeroes.currentValue) {
        this.generatePages();
    }
  }

  totalPagesNumber() {
    return Math.ceil(this.totalHeroes / this.pageSize);
  }

  generatePages() {
    this.pageList$ = Observable
      .range(...this.getPaginationRange(this.currentPage, this.totalPagesNumber()))
      .reduce((total, item) => [...total, item], []);
  }

  getPaginationRange(currentPage, totalPages) {
    const shownPages = Math.min(totalPages, 5);
    const sideRange = Math.floor(shownPages / 2);

    let leftBorder = Math.max(currentPage - sideRange, 1);
    leftBorder = Math.min(leftBorder, totalPages - shownPages + 1);
  
    return [leftBorder, shownPages];
  }

  goToPage(pageNumber) {
    this.currentPage$.next(pageNumber);
  }

  goToPreviousPage() {
    this.goToPage(this.currentPage - 1);
  }

  goToNextPage() {
    this.goToPage(this.currentPage + 1);
  }

  goToFirstPage() {
    this.currentPage$.next(1);
  }

  goToLastPage() {
    this.currentPage$.next(this.totalPagesNumber());
  }

  isFirstPage() {
    return this.currentPage === 1;
  }

  isLastPage() {
    return this.currentPage === this.totalPagesNumber();
  }

}
