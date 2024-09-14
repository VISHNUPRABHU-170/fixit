import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryModule } from 'projects/library/src/lib/library.module';
import { FxRegisterComponent } from './fx-register.component';
import { FxRegisterOtpComponent } from './components/fx-register-otp/fx-register-otp.component';
import { FxRegisterMobileNumberComponent } from './components/fx-register-mobile-number/fx-register-mobile-number.component';
import { FxRegisterRoutingModule } from './routing/fx-register-routing.module';



@NgModule({
  declarations: [
    FxRegisterComponent,
    FxRegisterOtpComponent,
    FxRegisterMobileNumberComponent
  ],
  imports: [
    CommonModule,
    LibraryModule,
    FxRegisterRoutingModule
  ]
})
export class FxRegisterModule { }
