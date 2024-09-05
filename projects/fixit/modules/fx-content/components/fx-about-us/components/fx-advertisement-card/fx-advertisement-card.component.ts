import { Component } from '@angular/core';
import {
  availabilityImageConfig,
  availabilityTextConfig,
  expertTechniciansImageConfig,
  expertTechniciansTextConfig,
  quickRepairImageConfig,
  quickRepairTextConfig
} from './config';

@Component({
  selector: 'fx-advertisement-card',
  templateUrl: './fx-advertisement-card.component.html',
  styleUrls: ['./fx-advertisement-card.component.scss']
})
export class FxAdvertisementCardComponent {
  quickRepairImageConfig = quickRepairImageConfig;
  expertTechniciansImageConfig = expertTechniciansImageConfig;
  availabilityImageConfig = availabilityImageConfig;
  quickRepairTextConfig = quickRepairTextConfig;
  expertTechniciansTextConfig = expertTechniciansTextConfig;
  availabilityTextConfig = availabilityTextConfig;
}
