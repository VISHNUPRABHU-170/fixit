import { Component, Input } from '@angular/core';
import { IMAGE_TYPE_MAPPER, ImageComponentModel } from './fx-image.model';

@Component({
  selector: 'fx-image',
  templateUrl: './fx-image.component.html',
  styleUrls: ['./fx-image.component.scss']
})
export class ImageComponent {
  @Input() data!: ImageComponentModel;
  IMAGE_TYPE_MAPPER = IMAGE_TYPE_MAPPER;
}
