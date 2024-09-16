import { Component, Input } from '@angular/core';
import { FxServiceBookItemComponentModel } from './fx-service-book-item.model';

@Component({
  selector: 'fx-service-book-item',
  templateUrl: './fx-service-book-item.component.html',
  styleUrls: ['./fx-service-book-item.component.scss']
})
export class FxServiceBookItemComponent {
  @Input() data!: FxServiceBookItemComponentModel;
}
