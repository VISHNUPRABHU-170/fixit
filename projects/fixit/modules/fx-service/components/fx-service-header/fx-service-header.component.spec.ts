import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxServiceHeaderComponent } from './fx-service-header.component';

describe('FxServiceHeaderComponent', () => {
  let component: FxServiceHeaderComponent;
  let fixture: ComponentFixture<FxServiceHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FxServiceHeaderComponent]
    });
    fixture = TestBed.createComponent(FxServiceHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
