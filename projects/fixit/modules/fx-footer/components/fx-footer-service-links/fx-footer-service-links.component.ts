import { Component, Input } from '@angular/core';
import { FxFooterServiceLinksModel } from './fx-footer-service-links.model';

@Component({
  selector: 'fx-footer-service-links',
  templateUrl: './fx-footer-service-links.component.html',
  styleUrls: ['./fx-footer-service-links.component.scss']
})
export class FxFooterServiceLinksComponent {
  @Input() data!: FxFooterServiceLinksModel;
}
