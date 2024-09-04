import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxImageComponent } from './fx-image.component';

describe('FxImageComponent', () => {
  let component: FxImageComponent;
  let fixture: ComponentFixture<FxImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FxImageComponent]
    });
    fixture = TestBed.createComponent(FxImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
