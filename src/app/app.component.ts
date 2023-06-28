import { Component, OnInit } from "@angular/core"
import { IFormData } from "./interfaces/FormData.interface"
import { FormDataService } from "./services/form-data.service"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "form-assignment"
  stepNo: number = 1
  formData: IFormData
  protected readonly JSON = JSON

  constructor(private formDataService: FormDataService) {}

  ngOnInit() {
    const formData = localStorage.getItem("formData")
    if (formData) {
      this.formDataService.setFormData(JSON.parse(formData))
    }
  }

  goToStep(step: number) {
    this.stepNo = step
  }

  submitForm(stepFormData: Partial<IFormData>) {
    this.formDataService.setFormData(stepFormData)
    console.log(
      "********************* Form Was Submitted *****************",
      this.formDataService.getFormData()
    )
    this.formData = this.formDataService.getFormData()
    localStorage.setItem("formData", JSON.stringify(this.formData))
    this.stepNo++
  }

  nextStep(stepFormData: Partial<IFormData>) {
    this.formDataService.setFormData(stepFormData)
    this.stepNo++
  }

  prevStep() {
    if (this.stepNo === 1) {
      return
    }
    this.stepNo--
  }
}
