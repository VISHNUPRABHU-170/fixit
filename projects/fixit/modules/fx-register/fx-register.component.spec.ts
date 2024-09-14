import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxRegisterComponent } from './fx-register.component';

describe('FxRegisterComponent', () => {
  let component: FxRegisterComponent;
  let fixture: ComponentFixture<FxRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FxRegisterComponent]
    });
    fixture = TestBed.createComponent(FxRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
