import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMAGE_COMPONENT_EVENT_TYPE, IMAGE_TYPE_MAPPER, ImageComponentModel, ImageComponentOutputEventModel } from './fx-image.model';

@Component({
  selector: 'fx-image',
  templateUrl: './fx-image.component.html',
  styleUrls: ['./fx-image.component.scss']
})
export class ImageComponent {
  
  @Input() data!: ImageComponentModel;
  @Output() event: EventEmitter<ImageComponentOutputEventModel> = new EventEmitter();
  
  IMAGE_TYPE_MAPPER = IMAGE_TYPE_MAPPER;

  onClick() {
    const outputData: ImageComponentOutputEventModel = {
      data: this.data,
      eventType: IMAGE_COMPONENT_EVENT_TYPE.ON_CLICK
    }
    this.event.emit(outputData);
  }
}
