import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() totalHeroes: number;
  private pageList: number[];
  private pageSize: number = 10;

  constructor() { }

  ngOnInit() {
    this.renderPaging();
  }

  renderPaging() {
    const totalPages: number = Math.ceil(this.totalHeroes / this.pageSize);

    this.pageList = new Array(totalPages)
      .fill(0)
      .map((item, i) => i + 1);
  }

}
