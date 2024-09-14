import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryModule } from 'projects/library/src/lib/library.module';
import { FxRoutingModule } from './routing/fx-routing.module';
import { FxContactUsComponent } from './modules/fx-contact-us/fx-contact-us.component';
import { FxViewComponent } from './modules/fx-view/fx-view.component';
import { FxHeaderModule } from './modules/fx-header/fx-header.module';
import { FxFooterModule } from './modules/fx-footer/fx-footer.module';


@NgModule({
  declarations: [
    FxViewComponent,
    FxContactUsComponent
  ],
  imports: [
    CommonModule,
    FxRoutingModule,
    LibraryModule,
    FxHeaderModule,
    FxFooterModule
  ],
  exports: [
    FxViewComponent
  ]
})
export class FixitModule { }
