import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxInputComponent } from './fx-input.component';

describe('FxInputComponent', () => {
  let component: FxInputComponent;
  let fixture: ComponentFixture<FxInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FxInputComponent]
    });
    fixture = TestBed.createComponent(FxInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
