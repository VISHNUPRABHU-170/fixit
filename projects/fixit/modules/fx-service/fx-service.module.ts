import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FxServiceComponent } from './fx-service.component';
import { FxServiceViewComponent } from './components/view/view.component';
import { FxServiceListComponent } from './components/fx-service-list/fx-service-list.component';
import { FxServiceHeaderComponent } from './components/fx-service-header/fx-service-header.component';
import { LibraryModule } from 'projects/library/src/lib/library.module';
import { FxServiceRoutingModule } from './routing/fx-service-routing.module';
import { FxServiceBookComponent } from './components/fx-service-book/fx-service-book.component';
import { FxServiceNavigateComponent } from './components/fx-service-book/fx-service-navigate/fx-service-navigate.component';
import { FxServiceBookListComponent } from './components/fx-service-book/fx-service-book-list/fx-service-book-list.component';
import { FxServiceBookItemComponent } from './components/fx-service-book/fx-service-book-list/fx-service-book-item/fx-service-book-item.component';


@NgModule({
  declarations: [
    FxServiceComponent,
    FxServiceViewComponent,
    FxServiceListComponent,
    FxServiceHeaderComponent,
    FxServiceBookComponent,
    FxServiceNavigateComponent,
    FxServiceBookListComponent,
    FxServiceBookItemComponent
  ],
  imports: [
    CommonModule,
    LibraryModule,
    FxServiceRoutingModule
  ]
})
export class FxServiceModule { }
