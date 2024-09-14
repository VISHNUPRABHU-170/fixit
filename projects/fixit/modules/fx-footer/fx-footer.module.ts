import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FxFooterComponent } from './fx-footer.component';
import { FxFooterServiceLinksComponent } from './components/fx-footer-service-links/fx-footer-service-links.component';
import { FxFooterQuickLinksComponent } from './components/fx-footer-quick-links/fx-footer-quick-links.component';
import { FxFooterContactComponent } from './components/fx-footer-contact/fx-footer-contact.component';
import { LibraryModule } from 'projects/library/src/lib/library.module';
import { FxFooterViewComponent } from './components/view/view.component';



@NgModule({
  declarations: [
    FxFooterComponent,
    FxFooterViewComponent,
    FxFooterContactComponent,
    FxFooterQuickLinksComponent,
    FxFooterServiceLinksComponent
  ],
  imports: [
    CommonModule,
    LibraryModule
  ],
  exports: [
    FxFooterComponent
  ]
})
export class FxFooterModule { }
