import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormContainerComponent } from './form-container/form-container.component';
import { FormStep1Component } from './form-container/form-step1/form-step1.component';
import { FormStep2Component } from './form-container/form-step2/form-step2.component';

@NgModule({
  declarations: [
    AppComponent,
    FormContainerComponent,
    FormStep1Component,
    FormStep2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
