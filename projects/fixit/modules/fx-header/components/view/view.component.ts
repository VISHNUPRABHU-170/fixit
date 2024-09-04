import { Component } from '@angular/core';
import { buttonConfig, imageConfig, navListConfig } from './config';

@Component({
  selector: 'fx-header-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class FxHeaderViewComponent {
  imageConfig = imageConfig;
  buttonConfig = buttonConfig;
  navListConfig = navListConfig;
}
