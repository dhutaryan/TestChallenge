import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() totalHeroes: number;
  private pageList$: Observable<number[]>;
  private pageSize: number = 10;

  constructor() { }

  ngOnInit() {
    this.pagesCount();
  }

  pagesCount() {
    const totalPages: number = Math.ceil(this.totalHeroes / this.pageSize);

    this.pageList$ = Observable.of(
      new Array(totalPages)
        .fill(0)
        .map((item, index) => index + 1)
    );
  }

}
