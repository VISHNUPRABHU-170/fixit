import { Component, Input } from '@angular/core';
import { FxNavListComponentModel } from './fx-nav-list.model';

@Component({
  selector: 'fx-nav-list',
  templateUrl: './fx-nav-list.component.html',
  styleUrls: ['./fx-nav-list.component.scss']
})
export class FxNavListComponent {
  @Input() data!: FxNavListComponentModel;
}
