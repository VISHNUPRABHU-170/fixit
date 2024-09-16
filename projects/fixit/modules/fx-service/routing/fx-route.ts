import { Routes } from "@angular/router";
import { FxServiceComponent } from "../fx-service.component";
import { FxServiceListComponent } from "../components/fx-service-list/fx-service-list.component";
import { FxServiceBookComponent } from "../components/fx-service-book/fx-service-book.component";

export const routes: Routes = [
  {
    path: '', component: FxServiceComponent,
    children: [
      { path: '', component: FxServiceListComponent },
      { path: 'book-service', component: FxServiceBookComponent }
    ]
  }
];
