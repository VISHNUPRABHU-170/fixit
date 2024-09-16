import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxServiceViewComponent } from './fx-service-view.component';

describe('FxServiceViewComponent', () => {
  let component: FxServiceViewComponent;
  let fixture: ComponentFixture<FxServiceViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FxServiceViewComponent]
    });
    fixture = TestBed.createComponent(FxServiceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
