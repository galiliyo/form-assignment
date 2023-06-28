import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppComponent } from "./app.component"
import { FormContainerComponent } from "./form-container/form-container.component"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { RangeValidatorDirective } from "./custom-validators/range.directive"
import { FormButtonsComponent } from "./form-container/form-buttons/form-buttons.component"
import { FormStep_2_Component } from "./form-container/form-step2/form-step_2.component"
import { FormStep_1_Component } from "./form-container/form-step1/form-step_1.component"

@NgModule({
  declarations: [
    AppComponent,
    FormContainerComponent,
    FormStep_1_Component,
    FormStep_2_Component,
    RangeValidatorDirective,
    FormButtonsComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
