import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'form-assignment';

  stepNo: number = 1;

  ngOnInit() {}

  goToStep(step: number) {
    console.log('step', step);
    this.stepNo = step;
  }
}
