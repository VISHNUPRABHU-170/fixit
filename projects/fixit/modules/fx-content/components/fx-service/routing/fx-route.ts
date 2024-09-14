import { Routes } from "@angular/router";
import { FxServiceComponent } from "../fx-service.component";
import { FxServiceListComponent } from "../components/fx-service-list/fx-service-list.component";
import { FxServiceViewComponent } from "../components/fx-service-view/fx-service-view.component";

export const routes: Routes = [
  {
    path: '', component: FxServiceComponent, children: [
      { path: '', component: FxServiceListComponent },
      { path: 'view', component: FxServiceViewComponent }
  ] }
];
