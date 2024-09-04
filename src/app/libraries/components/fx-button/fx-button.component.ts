import { Component, Input } from '@angular/core';
import { ButtonComponentModel } from './fx-button.model';

@Component({
  selector: 'fx-button',
  templateUrl: './fx-button.component.html',
  styleUrls: ['./fx-button.component.scss']
})
export class ButtonComponent {
  @Input() data!: ButtonComponentModel;
}
