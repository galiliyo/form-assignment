import { Component, EventEmitter, OnInit, Output } from "@angular/core"
import { FormBuilder, Validators } from "@angular/forms"
import { IFormData } from "../../interfaces/FormData.interface"
import { FormDataService } from "../../services/form-data.service"

@Component({
  selector: "app-form-step_1",
  templateUrl: "./form-step_1.component.html",
  styleUrls: ["./form-step_1.component.scss"],
})
export class FormStep_1_Component implements OnInit {
  @Output() onNext = new EventEmitter<Partial<IFormData>>()

  step_1_data: Omit<IFormData, "noOfEmp" | "companyName" | "domainName"> = {
    firstName: "",
    lastName: "",
    email: "",
    age: null,
  }
  allowedAge = { min: 18, max: 99 }
  form = this.fb.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    email: ["", [Validators.required, Validators.email]],
    age: [
      "",
      [
        Validators.required,
        Validators.min(this.allowedAge.min),
        Validators.max(this.allowedAge.max),
      ],
    ],
  })

  constructor(
    private fb: FormBuilder,
    private formDataService: FormDataService
  ) {}

  ngOnInit() {
    const formData = this.formDataService.getFormData()
    this.form.setValue({
      firstName: formData?.firstName || "",
      lastName: formData?.lastName || "",
      email: formData?.email || "",
      age: formData?.age ? String(formData.age) : "",
    })
  }

  nextBtnClicked() {
    const { firstName, lastName, age, email } = this.form.value
    this.step_1_data.firstName = String(firstName)
    this.step_1_data.lastName = String(lastName)
    this.step_1_data.email = String(email)
    this.step_1_data.age = +String(age)
    this.onNext.emit(this.step_1_data)
  }

  showErrorHint(fc: any) {
    return fc.invalid && (fc.dirty || fc.touched)
  }
}
