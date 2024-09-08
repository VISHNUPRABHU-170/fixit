import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxFooterServiceLinksComponent } from './fx-footer-service-links.component';

describe('FxFooterServiceLinksComponent', () => {
  let component: FxFooterServiceLinksComponent;
  let fixture: ComponentFixture<FxFooterServiceLinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FxFooterServiceLinksComponent]
    });
    fixture = TestBed.createComponent(FxFooterServiceLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
