import { Component, EventEmitter, Output } from '@angular/core';
import { contentOneConfig, contentTwoConfig, getOTPButtonConfig, inputConfig } from './config';

@Component({
  selector: 'fx-register-mobile-number',
  templateUrl: './fx-register-mobile-number.component.html',
  styleUrls: ['./fx-register-mobile-number.component.scss']
})
export class FxRegisterMobileNumberComponent {

  @Output() event: EventEmitter<any> = new EventEmitter();

  contentOneConfig = contentOneConfig;
  contentTwoConfig = contentTwoConfig;
  inputConfig = inputConfig;
  getOTPButtonConfig = getOTPButtonConfig;

  onGetOTP() {
    this.event.emit();
  }
}
