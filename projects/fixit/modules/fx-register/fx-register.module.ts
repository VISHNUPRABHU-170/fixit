import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryModule } from 'projects/library/src/lib/library.module';
import { FxRegisterComponent } from './fx-register.component';
import { FxVerifyOtpComponent } from './components/fx-verify-otp/fx-verify-otp.component';
import { FxRegisterMobileNumberComponent } from './components/fx-register-mobile-number/fx-register-mobile-number.component';
import { FxRegisterRoutingModule } from './routing/fx-register-routing.module';
import { FxRegisterViewComponent } from './components/view/view.component';
import { FxRegisterHeaderComponent } from './components/fx-register-header/fx-register-header.component';



@NgModule({
  declarations: [
    FxRegisterComponent,
    FxRegisterViewComponent,
    FxRegisterHeaderComponent,
    FxRegisterMobileNumberComponent,
    FxVerifyOtpComponent
  ],
  imports: [
    CommonModule,
    LibraryModule,
    FxRegisterRoutingModule
  ]
})
export class FxRegisterModule { }
