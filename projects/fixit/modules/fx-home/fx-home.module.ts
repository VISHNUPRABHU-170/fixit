import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FxHomeComponent } from './fx-home.component';
import { FxHomeViewComponent } from './components/view/view.component';
import { FxSearchCardResultComponent } from './components/fx-search/fx-search-card-result/fx-search-card-result.component';
import { FxServicesListComponent } from './components/fx-services-list/fx-services-list.component';
import { LibraryModule } from 'projects/library/src/lib/library.module';
import { FxHomeRoutingModule } from './routing/fx-home-routing.module';
import { FxSearchComponent } from './components/fx-search/fx-search.component';



@NgModule({
  declarations: [
    FxHomeComponent,
    FxHomeViewComponent,
    FxSearchComponent,
    FxSearchCardResultComponent,
    FxServicesListComponent
  ],
  imports: [
    CommonModule,
    LibraryModule,
    FxHomeRoutingModule
  ]
})
export class FxHomeModule { }
