import { Component, OnInit } from "@angular/core"
import { IFormData } from "./interfaces/FormData.interface"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "form-assignment"

  stepNo: number = 2

  ngOnInit() {}

  goToStep(step: number) {
    console.log("step", step)
    this.stepNo = step
  }

  submitForm($event: Partial<IFormData>) {
    console.log("submitForm", $event)
  }

  nextStep(stepFormData: Partial<IFormData>) {
    console.log("nextStep", stepFormData)
    this.stepNo++
  }
}
