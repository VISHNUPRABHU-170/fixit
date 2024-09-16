import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxServiceBookComponent } from './fx-service-book.component';

describe('FxServiceBookComponent', () => {
  let component: FxServiceBookComponent;
  let fixture: ComponentFixture<FxServiceBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FxServiceBookComponent]
    });
    fixture = TestBed.createComponent(FxServiceBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
