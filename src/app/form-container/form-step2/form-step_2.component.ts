import { Component, EventEmitter, Output } from "@angular/core"
import { FormBuilder, Validators } from "@angular/forms"
import { IFormData } from "../../interfaces/FormData.interface"
import { FormDataService } from "../../services/form-data.service"

@Component({
  selector: "app-form-step_2",
  templateUrl: "./form-step_2.component.html",
  styleUrls: ["./form-step_2.component.scss"],
})
export class FormStep_2_Component {
  @Output() onSubmit = new EventEmitter<Partial<IFormData>>()
  @Output() onPrev = new EventEmitter()

  step_2_data: Partial<IFormData> = {
    companyName: "",
    domainName: "",
    noOfEmp: 1,
  }
  form = this.fb.group({
    companyName: ["", Validators.required],
    domainName: [""],
    noOfEmp: ["", [Validators.required, Validators.min(1)]],
  })

  constructor(
    private fb: FormBuilder,
    private formDataService: FormDataService
  ) {}

  ngOnInit() {
    const formData = this.formDataService.getFormData()
    this.form.setValue({
      companyName: formData.companyName,
      domainName: formData.domainName ? formData.domainName : "",
      noOfEmp: String(formData.noOfEmp),
    })
  }

  onSubmitClicked() {
    const { companyName, domainName, noOfEmp } = this.form.value
    this.step_2_data.companyName = String(companyName)
    this.step_2_data.domainName = String(domainName)
    this.step_2_data.noOfEmp = +String(noOfEmp)
    this.onSubmit.emit(this.step_2_data)
  }

  prevBtnClicked() {
    this.onPrev.emit()
  }

  showErrorHint(fc: any) {
    return fc.invalid && (fc.dirty || fc.touched)
  }
}
