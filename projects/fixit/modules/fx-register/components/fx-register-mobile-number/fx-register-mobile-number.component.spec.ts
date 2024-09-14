import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxRegisterMobileNumberComponent } from './fx-register-mobile-number.component';

describe('FxRegisterMobileNumberComponent', () => {
  let component: FxRegisterMobileNumberComponent;
  let fixture: ComponentFixture<FxRegisterMobileNumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FxRegisterMobileNumberComponent]
    });
    fixture = TestBed.createComponent(FxRegisterMobileNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
