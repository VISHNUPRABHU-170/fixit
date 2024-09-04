import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxLinkComponent } from './fx-link.component';

describe('FxLinkComponent', () => {
  let component: FxLinkComponent;
  let fixture: ComponentFixture<FxLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FxLinkComponent]
    });
    fixture = TestBed.createComponent(FxLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
