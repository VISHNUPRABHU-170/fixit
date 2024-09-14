import { Component } from '@angular/core';
import { arrowRightImageConfig, cctvServiceImageConfig, computerServiceImageConfig, electricianServiceImageConfig, laptopServiceImageConfig } from './config';

@Component({
  selector: 'fx-home-service-list',
  templateUrl: './fx-services-list.component.html',
  styleUrls: ['./fx-services-list.component.scss']
})
export class FxServicesListComponent {
  laptopServiceImageConfig = laptopServiceImageConfig;
  computerServiceImageConfig = computerServiceImageConfig;
  electricianServiceImageConfig = electricianServiceImageConfig;
  cctvServiceImageConfig = cctvServiceImageConfig;
  arrowRightImageConfig = arrowRightImageConfig;
}
