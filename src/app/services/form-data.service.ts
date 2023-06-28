import { Injectable, OnInit } from "@angular/core"
import { IFormData } from "../interfaces/FormData.interface"

@Injectable({
  providedIn: "root",
})
export class FormDataService implements OnInit {
  private _formData: IFormData
  private emptyFormData: IFormData = {
    firstName: "",
    lastName: "",
    email: "",
    age: null,
    companyName: "",
    domainName: "",
    noOfEmp: null,
  }

  constructor() {}

  ngOnInit() {
    this._formData = this.emptyFormData
  }

  getFormData() {
    return this._formData
  }

  setFormData(formData: Partial<IFormData>) {
    this._formData = { ...this._formData, ...formData }
  }

  resetFormData() {
    this._formData = this.emptyFormData
  }
}
