import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxFooterContactComponent } from './fx-footer-contact.component';

describe('FxFooterContactComponent', () => {
  let component: FxFooterContactComponent;
  let fixture: ComponentFixture<FxFooterContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FxFooterContactComponent]
    });
    fixture = TestBed.createComponent(FxFooterContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
