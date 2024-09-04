import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/fx-button/fx-button.component';
import { ImageComponent } from './components/fx-image/fx-image.component';
import { LinkComponent } from './components/fx-link/fx-link.component';
import { FxRoutingModule } from 'projects/fixit/routing/fx-routing.module';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/fx-input/fx-input.component';

@NgModule({
  declarations: [
    ButtonComponent,
    ImageComponent,
    LinkComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    FxRoutingModule
  ],
  exports: [
    ButtonComponent,
    ImageComponent,
    LinkComponent,
    InputComponent
  ]
})
export class LibraryModule { }
