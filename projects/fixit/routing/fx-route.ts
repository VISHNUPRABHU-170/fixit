import { Routes } from "@angular/router";
import { FxHomeComponent } from "../modules/fx-content/components/fx-home/fx-home.component";
import { FxServiceComponent } from "../modules/fx-content/components/fx-service/fx-service.component";
import { FxAboutUsComponent } from "../modules/fx-content/components/fx-about-us/fx-about-us.component";
import { FxContactUsComponent } from "../modules/fx-content/components/fx-contact-us/fx-contact-us.component";
import { FxRegisterComponent } from "../modules/fx-content/components/fx-register/fx-register.component";

export const routes: Routes = [
  { path: '', component: FxHomeComponent },
  { path: 'home', component: FxHomeComponent },
  { path: 'services', component: FxServiceComponent },
  { path: 'about-us', component: FxAboutUsComponent },
  { path: 'contact-us', component: FxContactUsComponent },
  { path: 'register', component: FxRegisterComponent }
];
