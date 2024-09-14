import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxAboutUsCardComponent } from './fx-about-us-card.component';

describe('FxAboutUsCardComponent', () => {
  let component: FxAboutUsCardComponent;
  let fixture: ComponentFixture<FxAboutUsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FxAboutUsCardComponent]
    });
    fixture = TestBed.createComponent(FxAboutUsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
