import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FxServiceComponent } from './fx-service.component';
import { FxServiceViewComponent } from './components/fx-service-view/fx-service-view.component';
import { FxServiceListComponent } from './components/fx-service-list/fx-service-list.component';
import { FxServiceHeaderComponent } from './components/fx-service-header/fx-service-header.component';
import { LibraryModule } from 'projects/library/src/lib/library.module';
import { FxServiceRoutingModule } from './routing/fx-service-routing.module';


@NgModule({
  declarations: [
    FxServiceComponent,
    FxServiceViewComponent,
    FxServiceListComponent,
    FxServiceHeaderComponent
  ],
  imports: [
    CommonModule,
    LibraryModule,
    FxServiceRoutingModule
  ]
})
export class FxServiceModule { }
