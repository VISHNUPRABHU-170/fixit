import { Component } from '@angular/core';
import { serviceNavigateConfig } from './config';

@Component({
  selector: 'fx-service-navigate',
  templateUrl: './fx-service-navigate.component.html',
  styleUrls: ['./fx-service-navigate.component.scss']
})
export class FxServiceNavigateComponent {
  data = serviceNavigateConfig;
}
