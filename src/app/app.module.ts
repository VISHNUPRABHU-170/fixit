import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FixitModule } from 'projects/fixit/fixit-module.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FixitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
