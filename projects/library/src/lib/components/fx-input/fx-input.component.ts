import { Component, Input } from '@angular/core';
import { InputComponentModel } from './fx-input.model';

@Component({
  selector: 'fx-input',
  templateUrl: './fx-input.component.html',
  styleUrls: ['./fx-input.component.scss']
})
export class InputComponent {
  @Input() data!: InputComponentModel;
}
