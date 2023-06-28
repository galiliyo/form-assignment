import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss'],
})
export class FormContainerComponent implements OnInit {
  @Input() stepNo: number;
  @Output() onSetStep = new EventEmitter<number>();

  ngOnInit() {}

  nextBtnClicked() {
    console.log('nextBtnClicked');
    this.onSetStep.emit(this.stepNo === 1 ? 2 : 1);
  }
}
