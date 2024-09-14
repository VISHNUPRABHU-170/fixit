import { Component } from '@angular/core';
import { contentOneConfig, contentTwoConfig, getOTPButtonConfig, inputConfig } from './config';
import { FxNavigateService } from 'projects/fixit/core/services/fx-navigate-service.service';

@Component({
  selector: 'fx-register-mobile-number',
  templateUrl: './fx-register-mobile-number.component.html',
  styleUrls: ['./fx-register-mobile-number.component.scss']
})
export class FxRegisterMobileNumberComponent {
  contentOneConfig = contentOneConfig;
  contentTwoConfig = contentTwoConfig;
  inputConfig = inputConfig;
  getOTPButtonConfig = getOTPButtonConfig;

  constructor(private router: FxNavigateService) {}

  onGetOTP() {
    this.router.onNavigate(getOTPButtonConfig.routerLink!);
  }
}
