import { Component, Input } from '@angular/core';
import { FxFooterQuickLinksModel } from './fx-footer-quick-links.model';

@Component({
  selector: 'fx-footer-quick-links',
  templateUrl: './fx-footer-quick-links.component.html',
  styleUrls: ['./fx-footer-quick-links.component.scss']
})
export class FxFooterQuickLinksComponent {
  @Input() data!: FxFooterQuickLinksModel;
}
