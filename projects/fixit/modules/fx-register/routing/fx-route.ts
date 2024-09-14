import { Routes } from "@angular/router";
import { FxRegisterComponent } from "../fx-register.component";
import { FxRegisterMobileNumberComponent } from "../components/fx-register-mobile-number/fx-register-mobile-number.component";
import { FxRegisterOtpComponent } from "../components/fx-register-otp/fx-register-otp.component";

export const routes: Routes = [
  {
    path: '', component: FxRegisterComponent, children: [
      { path: '', component: FxRegisterMobileNumberComponent },
      { path: 'otp-verification', component: FxRegisterOtpComponent}
    ]
  }
];
