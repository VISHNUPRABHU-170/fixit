import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxStandardQualityCardComponent } from './fx-standard-quality-card.component';

describe('FxStandardQualityCardComponent', () => {
  let component: FxStandardQualityCardComponent;
  let fixture: ComponentFixture<FxStandardQualityCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FxStandardQualityCardComponent]
    });
    fixture = TestBed.createComponent(FxStandardQualityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
