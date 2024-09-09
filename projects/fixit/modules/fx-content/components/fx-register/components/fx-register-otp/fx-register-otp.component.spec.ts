import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxRegisterOtpComponent } from './fx-register-otp.component';

describe('FxRegisterOtpComponent', () => {
  let component: FxRegisterOtpComponent;
  let fixture: ComponentFixture<FxRegisterOtpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FxRegisterOtpComponent]
    });
    fixture = TestBed.createComponent(FxRegisterOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
