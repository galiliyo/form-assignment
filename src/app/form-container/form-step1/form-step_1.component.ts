import { Component, EventEmitter, Output, ViewChild } from "@angular/core"
import { NgForm, NgModel } from "@angular/forms"
import { IFormData } from "../../interfaces/FormData.interface"

@Component({
  selector: "app-form-step_1",
  templateUrl: "./form-step_1.component.html",
  styleUrls: ["./form-step_1.component.scss"],
})
export class FormStep_1_Component {
  @ViewChild("f", { static: false }) form1: NgForm
  @Output() onNext = new EventEmitter<Partial<IFormData>>()

  step_1_data = {
    firstName: "",
    lastName: "",
    email: "",
    age: 1,
  }

  allowedAge = { min: 18, max: 99 }

  submitted = false
  protected readonly JSON = JSON

  nextBtnClicked() {
    this.submitted = true
    this.step_1_data.firstName = this.form1.value.step_1_data.firstName
    this.step_1_data.lastName = this.form1.value.step_1_data.lastName
    this.step_1_data.email = this.form1.value.step_1_data.email
    this.step_1_data.age = +this.form1.value.step_1_data.age
    this.onNext.emit(this.step_1_data)
  }

  showErrorHint(ref: NgModel) {
    return ref.invalid && (ref.dirty || ref.touched)
  }
}
