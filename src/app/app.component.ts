import { Component } from '@angular/core';
import { SpinnerService } from './shared/spinner/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent { 
  showSpinner: boolean;

  constructor(private spinnerService: SpinnerService) { }

  ngOnInit() {
    this.spinnerService.status.subscribe((value: boolean) => {
        this.showSpinner = value;
    });
}
}
