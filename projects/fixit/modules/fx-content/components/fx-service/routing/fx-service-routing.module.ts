import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './fx-route';

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FxServiceRoutingModule { }
