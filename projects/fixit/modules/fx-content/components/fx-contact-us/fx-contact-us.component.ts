import { Component } from '@angular/core';
import { mailIDInputConfig, nameInputConfig, rateUsConfig, starRatedImageConfig, starUnRatedImageConfig, submitButtonConfig, subTitleConfig, titleConfig } from './config';

@Component({
  selector: 'app-fx-contact-us',
  templateUrl: './fx-contact-us.component.html',
  styleUrls: ['./fx-contact-us.component.scss']
})
export class FxContactUsComponent {
  titleConfig = titleConfig;
  subTitleConfig = subTitleConfig;
  rateUsConfig = rateUsConfig;
  nameInputConfig = nameInputConfig;
  mailIDInputConfig = mailIDInputConfig;
  submitButtonConfig = submitButtonConfig;
  ratingConfig = [starUnRatedImageConfig, starUnRatedImageConfig, starUnRatedImageConfig, starUnRatedImageConfig, starUnRatedImageConfig];

  onRateUs(index: number) {
    this.ratingConfig = this.ratingConfig.map((item, ind) => {
      return ind <= index ? starRatedImageConfig : starUnRatedImageConfig;
    });
  }
}
