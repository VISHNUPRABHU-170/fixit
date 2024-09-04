import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxButtonComponent } from './fx-button.component';

describe('FxButtonComponent', () => {
  let component: FxButtonComponent;
  let fixture: ComponentFixture<FxButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FxButtonComponent]
    });
    fixture = TestBed.createComponent(FxButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
