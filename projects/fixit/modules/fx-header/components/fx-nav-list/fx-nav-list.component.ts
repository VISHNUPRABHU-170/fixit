import { Component, Input } from '@angular/core';
import { FxNavListComponentModel } from './fx-nav-list.model';
import { FxNavigateService } from 'projects/fixit/core/services/fx-navigate-service.service';
import { LinkComponentOutputEventModel } from 'projects/library/src/lib/components/fx-link/fx-link.model';

@Component({
  selector: 'fx-nav-list',
  templateUrl: './fx-nav-list.component.html',
  styleUrls: ['./fx-nav-list.component.scss']
})
export class FxNavListComponent {
  @Input() data!: FxNavListComponentModel;

  constructor (private navigateService: FxNavigateService) { }

  onNavigate(outputData: LinkComponentOutputEventModel) {
    this.navigateService.onNavigate(outputData.data.routerLink!);
  }
}
