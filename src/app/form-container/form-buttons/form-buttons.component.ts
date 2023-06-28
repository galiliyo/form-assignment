import { Component, EventEmitter, Input, Output } from "@angular/core"

@Component({
  selector: "app-form-buttons",
  templateUrl: "./form-buttons.component.html",
  styleUrls: ["./form-buttons.component.scss"],
})
export class FormButtonsComponent {
  @Input() disabledNextBtn = true
  @Input() nextLabel = "Next"
  @Input() showPrevBtn?: boolean
  @Output() onNext = new EventEmitter()
  @Output() onPrev = new EventEmitter()
}
