import { Component } from '@angular/core';
import { buttonConfig, contentConfig, imageConfig, subTitleConfig, titleConfig } from './config';

@Component({
  selector: 'fx-about-us-card',
  templateUrl: './fx-about-us-card.component.html',
  styleUrls: ['./fx-about-us-card.component.scss']
})
export class FxAboutUsCardComponent {
  titleConfig = titleConfig;
  subTitleConfig = subTitleConfig;
  contentConfig = contentConfig;
  buttonConfig = buttonConfig;
  imageConfig = imageConfig;
}
