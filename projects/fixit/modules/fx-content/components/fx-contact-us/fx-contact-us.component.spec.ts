import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxContactUsComponent } from './fx-contact-us.component';

describe('FxContactUsComponent', () => {
  let component: FxContactUsComponent;
  let fixture: ComponentFixture<FxContactUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FxContactUsComponent]
    });
    fixture = TestBed.createComponent(FxContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
