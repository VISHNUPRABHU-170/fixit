import { Component, Input } from '@angular/core';
import { FxFooterContactModel } from './fx-footer-contact.model';

@Component({
  selector: 'fx-footer-contact',
  templateUrl: './fx-footer-contact.component.html',
  styleUrls: ['./fx-footer-contact.component.scss']
})
export class FxFooterContactComponent {
  @Input() data!: FxFooterContactModel;
}
