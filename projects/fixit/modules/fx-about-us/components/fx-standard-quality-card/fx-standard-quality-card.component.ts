import { Component } from '@angular/core';
import { buttonConfig, imageConfig, textConfig } from './config';

@Component({
  selector: 'fx-standard-quality-card',
  templateUrl: './fx-standard-quality-card.component.html',
  styleUrls: ['./fx-standard-quality-card.component.scss']
})
export class FxStandardQualityCardComponent {
  imageConfig = imageConfig;
  buttonConfig = buttonConfig;
  textConfig = textConfig;
}
