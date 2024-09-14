import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxFooterLinksComponent } from './fx-footer-links.component';

describe('FxFooterLinksComponent', () => {
  let component: FxFooterLinksComponent;
  let fixture: ComponentFixture<FxFooterLinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FxFooterLinksComponent]
    });
    fixture = TestBed.createComponent(FxFooterLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
