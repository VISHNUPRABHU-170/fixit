import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/fx-button/fx-button.component';
import { ImageComponent } from './components/fx-image/fx-image.component';
import { LinkComponent } from './components/fx-link/fx-link.component';
import { FxRoutingModule } from 'projects/fixit/routing/fx-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ButtonComponent,
    ImageComponent,
    LinkComponent
  ],
  imports: [
    CommonModule,
    FxRoutingModule
  ],
  exports: [
    ButtonComponent,
    ImageComponent,
    LinkComponent
  ]
})
export class LibraryModule { }
