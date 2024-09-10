import { Component } from '@angular/core';
import { cctvServiceButtonConfig, computerServiceButtonConfig, electricianServiceButtonConfig, laptopServiceButtonConfig, recentSearchTextConfig } from './config';

@Component({
  selector: 'fx-search-card-result',
  templateUrl: './fx-search-card-result.component.html',
  styleUrls: ['./fx-search-card-result.component.scss']
})
export class FxSearchCardResultComponent {
  recentSearchTextConfig = recentSearchTextConfig;
  laptopServiceButtonConfig = laptopServiceButtonConfig;
  computerServiceButtonConfig = computerServiceButtonConfig;
  electricianServiceButtonConfig = electricianServiceButtonConfig;
  cctvServiceButtonConfig = cctvServiceButtonConfig;
}
