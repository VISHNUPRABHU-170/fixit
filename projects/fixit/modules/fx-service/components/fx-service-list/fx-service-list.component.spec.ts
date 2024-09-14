import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxServiceListComponent } from './fx-service-list.component';

describe('FxServiceListComponent', () => {
  let component: FxServiceListComponent;
  let fixture: ComponentFixture<FxServiceListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FxServiceListComponent]
    });
    fixture = TestBed.createComponent(FxServiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
