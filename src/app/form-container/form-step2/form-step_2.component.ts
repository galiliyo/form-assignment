import { Component, EventEmitter, Output, ViewChild } from "@angular/core"
import { NgForm, NgModel } from "@angular/forms"

@Component({
  selector: "app-form-step_2",
  templateUrl: "./form-step_2.component.html",
  styleUrls: ["./form-step_2.component.scss"],
})
export class FormStep_2_Component {
  @ViewChild("f", { static: false }) form2: NgForm
  @Output() onNext = new EventEmitter<number>()

  step_2_data = {
    companyName: "",
    domainName: "",
    noOfEmp: "",
  }

  submitted = false
  protected readonly JSON = JSON

  onSubmit() {
    this.submitted = true
    this.step_2_data.companyName = this.form2.value.step_2_data.companyName
    this.step_2_data.domainName = this.form2.value.step_2_data.domainName
    this.step_2_data.noOfEmp = this.form2.value.step_2_data.noOfEmp
  }

  nextBtnClicked() {
    this.onNext.emit(2)
  }

  showErrorHint(ref: NgModel) {
    return ref.invalid && (ref.dirty || ref.touched)
  }
}
