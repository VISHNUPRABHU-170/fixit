import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxAdvertisementCardComponent } from './fx-advertisement-card.component';

describe('FxAdvertisementCardComponent', () => {
  let component: FxAdvertisementCardComponent;
  let fixture: ComponentFixture<FxAdvertisementCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FxAdvertisementCardComponent]
    });
    fixture = TestBed.createComponent(FxAdvertisementCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
