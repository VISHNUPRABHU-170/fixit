import { Routes } from "@angular/router";
import { FxHomeComponent } from "../modules/fx-content/components/fx-home/fx-home.component";
import { FxAboutUsComponent } from "../modules/fx-content/components/fx-about-us/fx-about-us.component";
import { FxContactUsComponent } from "../modules/fx-content/components/fx-contact-us/fx-contact-us.component";
import { FxRegisterComponent } from "../modules/fx-content/components/fx-register/fx-register.component";

export const routes: Routes = [
  { path: '', component: FxHomeComponent },
  { path: 'home', component: FxHomeComponent },
  { path: 'services', loadChildren: () => import('projects/fixit/modules/fx-content/components/fx-service/fx-service.module').then(m => m.FxServiceModule) },
  { path: 'about-us', component: FxAboutUsComponent },
  { path: 'contact-us', component: FxContactUsComponent },
  { path: 'register', component: FxRegisterComponent }
];

// { path: 'services', loadChildren: () => import('projects/fixit/modules/fx-content/components/fx-service/fx-service.module').then(m => m.FxServiceModule); },

// { path: 'services', component: FxServiceComponent; },
