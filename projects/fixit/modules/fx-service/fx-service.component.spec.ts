import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxServiceComponent } from './fx-service.component';

describe('FxServiceComponent', () => {
  let component: FxServiceComponent;
  let fixture: ComponentFixture<FxServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FxServiceComponent]
    });
    fixture = TestBed.createComponent(FxServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
