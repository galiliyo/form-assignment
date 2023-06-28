import { Component, EventEmitter, Output, ViewChild } from "@angular/core"
import { NgForm, NgModel } from "@angular/forms"
import { IFormData } from "../../interfaces/FormData.interface"

@Component({
  selector: "app-form-step_2",
  templateUrl: "./form-step_2.component.html",
  styleUrls: ["./form-step_2.component.scss"],
})
export class FormStep_2_Component {
  @ViewChild("f", { static: false }) form2: NgForm
  @Output() onSubmit = new EventEmitter<Partial<IFormData>>()
  @Output() onPrev = new EventEmitter()

  step_2_data: Partial<IFormData> = {
    companyName: "",
    domainName: "",
    noOfEmp: 1,
  }

  submitForm() {
    this.step_2_data.companyName = this.form2.value.step_2_data.companyName
    this.step_2_data.domainName = this.form2.value.step_2_data.domainName
    this.step_2_data.noOfEmp = this.form2.value.step_2_data.noOfEmp
  }

  onSubmitClicked() {
    this.onSubmit.emit(this.step_2_data)
  }

  prevBtnClicked() {
    this.onPrev.emit()
  }

  showErrorHint(model: NgModel) {
    return model.invalid && (model.dirty || model.touched)
  }
}
