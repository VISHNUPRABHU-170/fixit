import { Component } from '@angular/core';
import { serviceListConfigs } from './config';

@Component({
  selector: 'fx-service-list',
  templateUrl: './fx-service-list.component.html',
  styleUrls: ['./fx-service-list.component.scss']
})
export class FxServiceListComponent {
  serviceListConfigs = serviceListConfigs;

  onClickService() {
    
  }
}
