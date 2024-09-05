import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxAboutUsViewComponent } from './fx-about-us-view.component';

describe('FxAboutUsViewComponent', () => {
  let component: FxAboutUsViewComponent;
  let fixture: ComponentFixture<FxAboutUsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FxAboutUsViewComponent]
    });
    fixture = TestBed.createComponent(FxAboutUsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
