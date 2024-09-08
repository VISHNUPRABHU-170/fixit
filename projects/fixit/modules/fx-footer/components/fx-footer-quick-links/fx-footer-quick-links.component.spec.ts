import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxFooterQuickLinksComponent } from './fx-footer-quick-links.component';

describe('FxFooterQuickLinksComponent', () => {
  let component: FxFooterQuickLinksComponent;
  let fixture: ComponentFixture<FxFooterQuickLinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FxFooterQuickLinksComponent]
    });
    fixture = TestBed.createComponent(FxFooterQuickLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
