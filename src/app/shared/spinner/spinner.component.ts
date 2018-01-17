import { Component, OnInit } from '@angular/core';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
  providers: [SpinnerService],
})
export class SpinnerComponent implements OnInit {
  showSpinner: boolean;

  constructor(private spinnerService: SpinnerService) { }

  ngOnInit() {
    this.spinnerService.status.subscribe((value: boolean) => {
      this.showSpinner = value;
    });
  }

}
