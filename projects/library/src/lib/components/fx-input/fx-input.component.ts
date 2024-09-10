import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputComponentModel } from './fx-input.model';

@Component({
  selector: 'fx-input',
  templateUrl: './fx-input.component.html',
  styleUrls: ['./fx-input.component.scss']
})
export class InputComponent {
  @Input() data!: InputComponentModel;
  @Output() event: EventEmitter<any> = new EventEmitter();

  onFocus() {
    this.event.emit();
  }
}
