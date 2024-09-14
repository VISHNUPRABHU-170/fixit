import { Component } from '@angular/core';
import { headerTextConfig } from './config';

@Component({
  selector: 'fx-service-header',
  templateUrl: './fx-service-header.component.html',
  styleUrls: ['./fx-service-header.component.scss']
})
export class FxServiceHeaderComponent {
  headerTextConfig = headerTextConfig
}
