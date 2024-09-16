import { Component } from '@angular/core';
import { serviceListConfigs } from './config';
import { FxNavigateService } from 'projects/fixit/core/services/fx-navigate-service.service';

@Component({
  selector: 'fx-service-list',
  templateUrl: './fx-service-list.component.html',
  styleUrls: ['./fx-service-list.component.scss']
})
export class FxServiceListComponent {
  serviceListConfigs = serviceListConfigs;

  constructor(private router: FxNavigateService) {}

  onClickService() {
    this.router.onNavigate('services/book-service')
  }
}
