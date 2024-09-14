import { Component } from '@angular/core';
import {
  availabilityTextConfig,
  expertTechniciansTextConfig,
  quickRepairTextConfig
} from './config';

@Component({
  selector: 'fx-advertisement-card',
  templateUrl: './fx-advertisement-card.component.html',
  styleUrls: ['./fx-advertisement-card.component.scss']
})
export class FxAdvertisementCardComponent {
  quickRepairTextConfig = quickRepairTextConfig;
  expertTechniciansTextConfig = expertTechniciansTextConfig;
  availabilityTextConfig = availabilityTextConfig;
}
