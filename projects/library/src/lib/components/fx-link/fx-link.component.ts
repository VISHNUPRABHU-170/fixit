import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LinkComponentModel } from './fx-link.model';

@Component({
  selector: 'fx-link',
  templateUrl: './fx-link.component.html',
  styleUrls: ['./fx-link.component.scss']
})
export class LinkComponent {
  @Input() data!: LinkComponentModel;
  @Output() event: EventEmitter<any> = new EventEmitter();

  onClick() {
    this.event.emit();
  }
}
