import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStep2Component } from './form-step2.component';

describe('FormStep2Component', () => {
  let component: FormStep2Component;
  let fixture: ComponentFixture<FormStep2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormStep2Component]
    });
    fixture = TestBed.createComponent(FormStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
