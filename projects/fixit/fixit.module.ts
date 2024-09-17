import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryModule } from 'projects/library/src/lib/library.module';
import { FxRoutingModule } from './routing/fx-routing.module';
import { FxContactUsComponent } from './modules/fx-contact-us/fx-contact-us.component';
import { FxHeaderModule } from './modules/fx-header/fx-header.module';
import { FxFooterModule } from './modules/fx-footer/fx-footer.module';
import { FixitComponent } from './fixit.component';


@NgModule({
  declarations: [
    FixitComponent,
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
    FixitComponent
  ]
})
export class FixitModule { }
