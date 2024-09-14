import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxAboutUsComponent } from './fx-about-us.component';

describe('FxAboutUsComponent', () => {
  let component: FxAboutUsComponent;
  let fixture: ComponentFixture<FxAboutUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FxAboutUsComponent]
    });
    fixture = TestBed.createComponent(FxAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
