import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponentModel, ButtonComponentOutputEventModel, BUTTON_COMPONENT_EVENT_TYPE } from './fx-button.model';

@Component({
  selector: 'fx-button',
  templateUrl: './fx-button.component.html',
  styleUrls: ['./fx-button.component.scss']
})
export class ButtonComponent {
  @Input() data!: ButtonComponentModel;
  @Output() event: EventEmitter<ButtonComponentOutputEventModel> = new EventEmitter();

  onClick() {
    const outputData: ButtonComponentOutputEventModel = {
      data: this.data,
      eventType: BUTTON_COMPONENT_EVENT_TYPE.ON_CLICK
    }
    this.event.emit(outputData);
  }
}
