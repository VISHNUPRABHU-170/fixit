import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FxAboutUsComponent } from './fx-about-us.component';
import { FxStandardQualityCardComponent } from './components/fx-standard-quality-card/fx-standard-quality-card.component';
import { FxCustomerReviewCarouselComponent } from './components/fx-customer-review-carousel/fx-customer-review-carousel.component';
import { FxAdvertisementCardComponent } from './components/fx-advertisement-card/fx-advertisement-card.component';
import { FxAboutUsViewComponent } from './components/view/view.component';
import { FxAboutUsCardComponent } from './components/fx-about-us-card/fx-about-us-card.component';
import { LibraryModule } from 'projects/library/src/lib/library.module';
import { FxAboutUsRoutingModule } from './routing/fx-service-routing.module';



@NgModule({
  declarations: [
    FxAboutUsComponent,
    FxStandardQualityCardComponent,
    FxCustomerReviewCarouselComponent,
    FxAdvertisementCardComponent,
    FxAboutUsViewComponent,
    FxAboutUsCardComponent
  ],
  imports: [
    CommonModule,
    LibraryModule,
    FxAboutUsRoutingModule
  ]
})
export class FxAboutUsModule { }
