import { Component } from '@angular/core';
import { laptopServiceImageConfig, searchButtonImageConfig, inputConfig, textConfigOne, textConfigTwo } from './config';

@Component({
  selector: 'fx-search',
  templateUrl: './fx-search.component.html',
  styleUrls: ['./fx-search.component.scss']
})
export class FxSearchComponent {
  laptopServiceImageConfig = laptopServiceImageConfig;
  searchButtonImageConfig = searchButtonImageConfig;
  inputConfig = inputConfig;
  textConfigOne = textConfigOne;
  textConfigTwo = textConfigTwo;

  isSearchFocused = false;

  onFocus() {
    this.isSearchFocused = !this.isSearchFocused;
  }
}
