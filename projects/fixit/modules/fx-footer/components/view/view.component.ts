import { Component } from '@angular/core';
import { contactConfig, quickLinksConfig, servicesLinksConfig } from './config';

@Component({
  selector: 'fx-footer-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class FxFooterViewComponent {
  contactConfig = contactConfig;
  servicesLinksConfig = servicesLinksConfig;
  quickLinksConfig = quickLinksConfig;
}
