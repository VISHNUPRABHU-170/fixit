import { Component } from '@angular/core';
import { buttonConfig, imageConfig, textConfig } from './config';
import { FxNavigateService } from 'projects/fixit/core/services/fx-navigate-service.service';
import { ButtonComponentOutputEventModel } from 'projects/library/src/lib/components/fx-button/fx-button.model';

@Component({
  selector: 'fx-standard-quality-card',
  templateUrl: './fx-standard-quality-card.component.html',
  styleUrls: ['./fx-standard-quality-card.component.scss']
})
export class FxStandardQualityCardComponent {
  imageConfig = imageConfig;
  buttonConfig = buttonConfig;
  textConfig = textConfig;

  constructor (private router: FxNavigateService) { }

  onClickExploreServices(outputData: ButtonComponentOutputEventModel) {
    this.router.onNavigate(outputData.data.routerLink!);
  }
}
