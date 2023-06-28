import { Injectable } from "@angular/core"
import { IFormData } from "../interfaces/FormData.interface"

@Injectable({
  providedIn: "root",
})
export class FormDataServiceService {
  private _formData: IFormData = {
    firstName: "",
    lastName: "",
    email: "",
    age: 1,
    companyName: "",
    domainName: "",
    noOfEmp: 1,
  }

  getFormData() {
    return this._formData
  }

  setFormData(formData: Partial<IFormData>) {
    this._formData = { ...this._formData, ...formData }
  }
}
