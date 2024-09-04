import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxServicesListComponent } from './fx-services-list.component';

describe('FxServicesListComponent', () => {
  let component: FxServicesListComponent;
  let fixture: ComponentFixture<FxServicesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FxServicesListComponent]
    });
    fixture = TestBed.createComponent(FxServicesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
