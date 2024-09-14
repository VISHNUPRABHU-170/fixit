import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FxHeaderComponent } from './fx-header.component';
import { FxHeaderViewComponent } from './components/view/view.component';
import { FxNavListComponent } from './components/fx-nav-list/fx-nav-list.component';
import { LibraryModule } from 'projects/library/src/lib/library.module';



@NgModule({
  declarations: [
    FxHeaderComponent,
    FxHeaderViewComponent,
    FxNavListComponent
  ],
  imports: [
    CommonModule,
    LibraryModule
  ],
  exports: [
    FxHeaderComponent
  ]
})
export class FxHeaderModule { }
