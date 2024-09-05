import { Component, Input } from '@angular/core';
import { TextComponentModel } from './fx-text.model';

@Component({
  selector: 'fx-text',
  templateUrl: './fx-text.component.html',
  styleUrls: ['./fx-text.component.scss']
})
export class TextComponent {
  @Input() data!: TextComponentModel;
}
