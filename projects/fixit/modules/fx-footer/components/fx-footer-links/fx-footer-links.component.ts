import { Component, Input } from '@angular/core';
import { FxFooterLinksModel } from './fx-footer-links.model';
import { LinkComponentOutputEventModel } from 'projects/library/src/lib/components/fx-link/fx-link.model';
import { FxNavigateService } from 'projects/fixit/core/services/fx-navigate-service.service';

@Component({
  selector: 'fx-footer-links',
  templateUrl: './fx-footer-links.component.html',
  styleUrls: ['./fx-footer-links.component.scss']
})
export class FxFooterLinksComponent {
  @Input() data!: FxFooterLinksModel;

  constructor(private router: FxNavigateService) {}

  onClick(outputData: LinkComponentOutputEventModel) {
    this.router.onNavigate(outputData.data.routerLink!);
  }
}
