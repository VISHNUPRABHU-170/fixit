import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxServiceNavigateComponent } from './fx-service-navigate.component';

describe('FxServiceNavigateComponent', () => {
  let component: FxServiceNavigateComponent;
  let fixture: ComponentFixture<FxServiceNavigateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FxServiceNavigateComponent]
    });
    fixture = TestBed.createComponent(FxServiceNavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
