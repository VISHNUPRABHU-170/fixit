import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './core/components/view/view.component';
import { LibraryModule } from 'projects/library/src/lib/library.module';
import { FxContentComponent } from './modules/fx-content/components/fx-content/fx-content.component';
import { FxFooterComponent } from './modules/fx-footer/components/fx-footer/fx-footer.component';
import { FxHeaderComponent } from './modules/fx-header/fx-header.component';
import { FxRoutingModule } from './routing/fx-routing.module';
import { FxNavListComponent } from './modules/fx-header/components/fx-nav-list/fx-nav-list.component';
import { FxHeaderViewComponent } from './modules/fx-header/components/view/view.component';



@NgModule({
  declarations: [
    ViewComponent,
    FxHeaderViewComponent,
    FxContentComponent,
    FxFooterComponent,
    FxHeaderComponent,
    FxNavListComponent
  ],
  imports: [
    CommonModule,
    FxRoutingModule,
    LibraryModule
  ],
  exports: [
    ViewComponent
  ]
})
export class FixitModule { }
