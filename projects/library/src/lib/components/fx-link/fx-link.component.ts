import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LINK_COMPONENT_EVENT_TYPE, LinkComponentModel, LinkComponentOutputEventModel } from './fx-link.model';

@Component({
  selector: 'fx-link',
  templateUrl: './fx-link.component.html',
  styleUrls: ['./fx-link.component.scss']
})
export class LinkComponent {
  @Input() data!: LinkComponentModel;
  @Output() event: EventEmitter<LinkComponentOutputEventModel> = new EventEmitter();

  onClick() {
    const outputData: LinkComponentOutputEventModel = {
      data: this.data,
      eventType: LINK_COMPONENT_EVENT_TYPE.ON_CLICK
    }
    this.event.emit(outputData);
  }
}
