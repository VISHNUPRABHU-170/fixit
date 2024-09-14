import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/fx-button/fx-button.component';
import { ImageComponent } from './components/fx-image/fx-image.component';
import { LinkComponent } from './components/fx-link/fx-link.component';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/fx-input/fx-input.component';
import { TextComponent } from './components/fx-text/fx-text.component';

@NgModule({
  declarations: [
    ButtonComponent,
    ImageComponent,
    LinkComponent,
    InputComponent,
    TextComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    ImageComponent,
    LinkComponent,
    InputComponent,
    TextComponent
  ]
})
export class LibraryModule { }
