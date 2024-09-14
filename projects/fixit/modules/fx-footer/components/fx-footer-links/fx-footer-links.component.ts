import { Component, Input } from '@angular/core';
import { FxFooterLinksModel } from './fx-footer-links.model';

@Component({
  selector: 'fx-footer-links',
  templateUrl: './fx-footer-links.component.html',
  styleUrls: ['./fx-footer-links.component.scss']
})
export class FxFooterLinksComponent {
  @Input() data!: FxFooterLinksModel;
}
