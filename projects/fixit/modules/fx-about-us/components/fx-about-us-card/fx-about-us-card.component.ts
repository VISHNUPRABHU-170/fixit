import { Component } from '@angular/core';
import { buttonConfig, contentConfig, imageConfig, subTitleConfig, titleConfig } from './config';
import { FxNavigateService } from 'projects/fixit/core/services/fx-navigate-service.service';
import { ButtonComponentOutputEventModel } from 'projects/library/src/lib/components/fx-button/fx-button.model';

@Component({
  selector: 'fx-about-us-card',
  templateUrl: './fx-about-us-card.component.html',
  styleUrls: ['./fx-about-us-card.component.scss']
})
export class FxAboutUsCardComponent {
  titleConfig = titleConfig;
  subTitleConfig = subTitleConfig;
  contentConfig = contentConfig;
  buttonConfig = buttonConfig;
  imageConfig = imageConfig;

  constructor(private router: FxNavigateService) {}

  onClickExploreServices(outputData: ButtonComponentOutputEventModel) {
    this.router.onNavigate(outputData.data.routerLink!)
  }
}
