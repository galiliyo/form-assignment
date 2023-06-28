import { Component, ViewChild } from '@angular/core'
import { NgForm, NgModel } from '@angular/forms'

@Component({
  selector: 'app-form-step1',
  templateUrl: './form-step1.component.html',
  styleUrls: ['./form-step1.component.scss'],
})
export class FormStep1Component {
  @ViewChild('f', { static: false }) form1: NgForm

  step_1_data = {
    firstName: '',
    lastName: '',
    email: '',
    age: '',
  }
  submitted = false
  protected readonly JSON = JSON

  onSubmit() {
    this.submitted = true
    this.step_1_data.firstName = this.form1.value.step_1_data.firstName
    this.step_1_data.lastName = this.form1.value.step_1_data.lastName
    this.step_1_data.email = this.form1.value.step_1_data.email
    this.step_1_data.age = this.form1.value.step_1_data.age
  }

  nextBtnClicked() {}

  showErrorHint(ref: NgModel) {
    return ref.invalid && (ref.dirty || ref.touched)
  }
}
