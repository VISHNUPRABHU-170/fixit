import { Component, Input } from '@angular/core';
import { TEXT_COLOR_MAPPER, TEXT_SIZE_MAPPER, TextComponentModel } from './fx-text.model';

@Component({
  selector: 'fx-text',
  templateUrl: './fx-text.component.html',
  styleUrls: ['./fx-text.component.scss']
})
export class TextComponent {
  @Input() data!: TextComponentModel;
  TEXT_SIZE_MAPPER = TEXT_SIZE_MAPPER;
  TEXT_COLOR_MAPPER = TEXT_COLOR_MAPPER;
}
