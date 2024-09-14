import { Routes } from "@angular/router";
import { FxContactUsComponent } from "../modules/fx-contact-us/fx-contact-us.component";

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('projects/fixit/modules/fx-home/fx-home.module').then(m => m.FxHomeModule)
  },
  {
    path: 'home',
    loadChildren: () => import('projects/fixit/modules/fx-home/fx-home.module').then(m => m.FxHomeModule)
  },
  {
    path: 'services',
    loadChildren: () => import('projects/fixit/modules/fx-service/fx-service.module').then(m => m.FxServiceModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('projects/fixit/modules/fx-about-us/fx-about-us.module').then(m => m.FxAboutUsModule)
  },
  {
    path: 'contact-us',
    component: FxContactUsComponent
  },
  {
    path: 'register',
    loadChildren: () => import('projects/fixit/modules/fx-register/fx-register.module').then(m => m.FxRegisterModule)
  }
];
