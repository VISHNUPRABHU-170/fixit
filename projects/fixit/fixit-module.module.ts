import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './core/components/view/view.component';
import { LibraryModule } from 'projects/library/src/lib/library.module';
import { FxContentComponent } from './modules/fx-content/components/fx-content/fx-content.component';
import { FxFooterComponent } from './modules/fx-footer/components/fx-footer/fx-footer.component';
import { FxHeaderComponent } from './modules/fx-header/components/fx-header/fx-header.component';



@NgModule({
  declarations: [
    ViewComponent,
    FxContentComponent,
    FxFooterComponent,
    FxHeaderComponent
  ],
  imports: [
    CommonModule,
    LibraryModule
  ],
  exports: [
    ViewComponent
  ]
})
export class FixitModule { }
