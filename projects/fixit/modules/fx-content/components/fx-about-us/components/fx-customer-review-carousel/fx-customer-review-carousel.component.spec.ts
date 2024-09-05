import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxCustomerReviewCarouselComponent } from './fx-customer-review-carousel.component';

describe('FxCustomerReviewCarouselComponent', () => {
  let component: FxCustomerReviewCarouselComponent;
  let fixture: ComponentFixture<FxCustomerReviewCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FxCustomerReviewCarouselComponent]
    });
    fixture = TestBed.createComponent(FxCustomerReviewCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
