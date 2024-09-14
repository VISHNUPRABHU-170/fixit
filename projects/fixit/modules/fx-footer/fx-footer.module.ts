import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FxFooterComponent } from './fx-footer.component';
import { FxFooterContactComponent } from './components/fx-footer-contact/fx-footer-contact.component';
import { LibraryModule } from 'projects/library/src/lib/library.module';
import { FxFooterViewComponent } from './components/view/view.component';
import { FxFooterLinksComponent } from './components/fx-footer-links/fx-footer-links.component';



@NgModule({
  declarations: [
    FxFooterComponent,
    FxFooterViewComponent,
    FxFooterContactComponent,
    FxFooterLinksComponent
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
