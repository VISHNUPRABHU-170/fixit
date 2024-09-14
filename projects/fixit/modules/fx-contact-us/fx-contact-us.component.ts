import { Component } from '@angular/core';
import { starRatedImageConfig, starUnRatedImageConfig, contactUsConfig } from './config';

@Component({
  selector: 'app-fx-contact-us',
  templateUrl: './fx-contact-us.component.html',
  styleUrls: ['./fx-contact-us.component.scss']
})
export class FxContactUsComponent {
  data = contactUsConfig;
  starRatedImageConfig = starRatedImageConfig;
  starUnRatedImageConfig = starUnRatedImageConfig;

  onRateUs(index: number) {
    this.data.ratingContent = this.data.ratingContent.map((item, ind) => {
      return ind <= index ? starRatedImageConfig : starUnRatedImageConfig;
    });
  }
}
