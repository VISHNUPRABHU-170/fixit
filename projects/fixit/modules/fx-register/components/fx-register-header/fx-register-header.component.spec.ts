import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxRegisterHeaderComponent } from './fx-register-header.component';

describe('FxRegisterHeaderComponent', () => {
  let component: FxRegisterHeaderComponent;
  let fixture: ComponentFixture<FxRegisterHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FxRegisterHeaderComponent]
    });
    fixture = TestBed.createComponent(FxRegisterHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
