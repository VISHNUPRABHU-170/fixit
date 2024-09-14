import { Component } from '@angular/core';
import { loginImageConfig, titleConfig } from './config';
import { Router } from '@angular/router';

@Component({
  selector: 'fx-register',
  templateUrl: './fx-register.component.html',
  styleUrls: ['./fx-register.component.scss']
})
export class FxRegisterComponent {
  titleConfig = titleConfig;
  loginImageConfig = loginImageConfig;
  isOTPVerification = false;

  constructor (private route: Router) {}

  onGetOTP() {
    this.isOTPVerification = true;
  }

  onVerify() {
    this.route.navigate(['/home']);
  }
}
