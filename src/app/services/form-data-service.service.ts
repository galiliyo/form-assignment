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
    age: undefined,
    companyName: "",
    domainName: "",
    noOfEmp: undefined,
  }

  getFormData() {
    return this._formData
  }

  setFormData(formData: Partial<IFormData>) {
    this._formData = { ...this._formData, ...formData }
  }
}
