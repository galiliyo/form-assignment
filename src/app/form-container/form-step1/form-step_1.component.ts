import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core"
import { NgForm, NgModel } from "@angular/forms"
import { IFormData } from "../../interfaces/FormData.interface"
import { FormDataServiceService } from "../../services/form-data-service.service"

@Component({
  selector: "app-form-step_1",
  templateUrl: "./form-step_1.component.html",
  styleUrls: ["./form-step_1.component.scss"],
})
export class FormStep_1_Component implements OnInit {
  @ViewChild("f", { static: false }) form_1: NgForm
  @Output() onNext = new EventEmitter<Partial<IFormData>>()

  step_1_data: Partial<IFormData> = {
    firstName: "",
    lastName: "",
    email: "",
    age: undefined,
  }
  allowedAge = { min: 18, max: 99 }

  constructor(private formDataService: FormDataServiceService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.form_1.setValue({
        step_1_data: { ...this.formDataService.getFormData() },
      })
    }, 0)
  }

  nextBtnClicked() {
    this.step_1_data.firstName = this.form_1.value.step_1_data.firstName
    this.step_1_data.lastName = this.form_1.value.step_1_data.lastName
    this.step_1_data.email = this.form_1.value.step_1_data.email
    this.step_1_data.age = this.form_1.value.step_1_data.age
      ? +this.form_1.value.step_1_data.age
      : undefined
    this.onNext.emit(this.step_1_data)
  }

  showErrorHint(ref: NgModel) {
    return ref.invalid && (ref.dirty || ref.touched)
  }
}
