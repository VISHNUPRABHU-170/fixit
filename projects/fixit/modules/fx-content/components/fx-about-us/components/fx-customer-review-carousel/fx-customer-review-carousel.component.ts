import { Component } from '@angular/core';
import { rightNavigationConfig, leftNavigationConfig, subTitleConfig, titleConfig } from './config';

@Component({
  selector: 'fx-customer-review-carousel',
  templateUrl: './fx-customer-review-carousel.component.html',
  styleUrls: ['./fx-customer-review-carousel.component.scss']
})
export class FxCustomerReviewCarouselComponent {
  titleConfig = titleConfig;
  subTitleConfig = subTitleConfig;
  rightNavigationConfig = rightNavigationConfig;
  leftNavigationConfig = leftNavigationConfig;
}
