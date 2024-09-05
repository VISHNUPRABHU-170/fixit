import { Component } from '@angular/core';
import { aboutUsLinkConfig, cctvServiceLinkConfig, computerServiceLinkConfig, contactUsLinkConfig, electricianServiceLinkConfig, imageConfig, laptopServiceLinkConfig, locationTextConfig, phoneTextConfig, servicesLinkConfig, timerTextConfig } from './config';

@Component({
  selector: 'fx-footer',
  templateUrl: './fx-footer.component.html',
  styleUrls: ['./fx-footer.component.scss']
})
export class FxFooterComponent {
  imageConfig = imageConfig;
  locationTextConfig = locationTextConfig;
  phoneTextConfig = phoneTextConfig;
  timerTextConfig = timerTextConfig;
  laptopServiceLinkConfig = laptopServiceLinkConfig;
  computerServiceLinkConfig = computerServiceLinkConfig;
  electricianServiceLinkConfig = electricianServiceLinkConfig;
  cctvServiceLinkConfig = cctvServiceLinkConfig;
  servicesLinkConfig = servicesLinkConfig;
  aboutUsLinkConfig = aboutUsLinkConfig;
  contactUsLinkConfig = contactUsLinkConfig;
}
