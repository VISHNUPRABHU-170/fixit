import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/fx-button/fx-button.component';
import { ImageComponent } from './components/fx-image/fx-image.component';
import { LinkComponent } from './components/fx-link/fx-link.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    ButtonComponent,
    ImageComponent,
    LinkComponent
  ],
  imports: [
    AppRoutingModule
  ],
  exports: [
    ButtonComponent,
    ImageComponent,
    LinkComponent
  ]
})
export class LibraryModule { }
