import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/fx-button/fx-button.component';
import { ImageComponent } from './components/fx-image/fx-image.component';
import { LinkComponent } from './components/fx-link/fx-link.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    ButtonComponent,
    ImageComponent,
    LinkComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    ButtonComponent,
    ImageComponent,
    LinkComponent
  ]
})
export class LibraryModule { }
