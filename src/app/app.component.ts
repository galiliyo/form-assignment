import { Component, OnInit } from "@angular/core"
import { IFormData } from "./interfaces/FormData.interface"
import { FormDataServiceService } from "./services/form-data-service.service"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "form-assignment"
  stepNo: number = 1

  constructor(private formDataService: FormDataServiceService) {}

  ngOnInit() {}

  goToStep(step: number) {
    this.stepNo = step
  }

  submitForm(stepFormData: Partial<IFormData>) {
    this.formDataService.setFormData(stepFormData)
    console.log(
      "this.formDataService.getFormData()",
      this.formDataService.getFormData()
    )
  }

  nextStep(stepFormData: Partial<IFormData>) {
    this.formDataService.setFormData(stepFormData)
    this.stepNo++
  }
}
