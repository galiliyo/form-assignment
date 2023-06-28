import { Directive, Input, OnInit } from '@angular/core'
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms'

/// Custom validator for template based forms - ended up not using this
@Directive({
  selector: "[appRangeValidator]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: RangeValidatorDirective,
      multi: true,
    },
  ],
})
export class RangeValidatorDirective implements Validator, OnInit {
  @Input() allowedRange: { min: number; max: number } = { min: 18, max: 99 }

  ngOnInit() {}

  validate(c: FormControl) {
    let v: number = +c.value

    if (isNaN(v)) {
      return { outOfRange: true, requiredValue: "18-99" }
    }

    if (v < +18 || v > +99) {
      return { outOfRange: true, requiredValue: "18-99" }
    }

    return null
  }
}
