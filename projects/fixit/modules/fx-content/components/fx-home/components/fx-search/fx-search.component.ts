import { Component } from '@angular/core';
import { laptopServiceImageConfig, searchButtonImageConfig, inputConfig, textConfig1, textConfig2 } from './config';

@Component({
  selector: 'fx-search',
  templateUrl: './fx-search.component.html',
  styleUrls: ['./fx-search.component.scss']
})
export class FxSearchComponent {
  laptopServiceImageConfig = laptopServiceImageConfig;
  searchButtonImageConfig = searchButtonImageConfig;
  inputConfig = inputConfig;
  textConfig1 = textConfig1;
  textConfig2 = textConfig2;
}
