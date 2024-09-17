import { Component } from '@angular/core';
import { buttonConfig, imageConfig, navListConfig } from './config';
import { FxNavigateService } from 'projects/fixit/core/services/fx-navigate-service.service';
import { ButtonComponentOutputEventModel } from 'projects/library/src/lib/components/fx-button/fx-button.model';
import { ImageComponentOutputEventModel } from 'projects/library/src/lib/components/fx-image/fx-image.model';

@Component({
  selector: 'fx-header-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class FxHeaderViewComponent {
  imageConfig = imageConfig;
  buttonConfig = buttonConfig;
  navListConfig = navListConfig;

  constructor (private navigateService: FxNavigateService) { }

  onNavigate(outputData: ButtonComponentOutputEventModel | ImageComponentOutputEventModel) {
    this.navigateService.onNavigate(outputData.data.routerLink!);
  }
}
