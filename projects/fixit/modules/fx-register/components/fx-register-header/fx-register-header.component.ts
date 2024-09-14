import { Component } from '@angular/core';
import { loginImageConfig, titleConfig } from './config';

@Component({
  selector: 'fx-register-header',
  templateUrl: './fx-register-header.component.html',
  styleUrls: ['./fx-register-header.component.scss']
})
export class FxRegisterHeaderComponent {
  titleConfig = titleConfig;
  loginImageConfig = loginImageConfig;
}
