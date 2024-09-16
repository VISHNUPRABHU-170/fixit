import { Component } from '@angular/core';
import { laptopServiceListConfig, titleConfig } from './config';

@Component({
  selector: 'fx-service-book-list',
  templateUrl: './fx-service-book-list.component.html',
  styleUrls: ['./fx-service-book-list.component.scss']
})
export class FxServiceBookListComponent {
  titleConfig = titleConfig;
  laptopServiceListConfig = laptopServiceListConfig;
}
