import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './core/components/view/view.component';
import { LibraryModule } from 'projects/library/src/lib/library.module';
import { FxFooterComponent } from './modules/fx-footer/fx-footer.component';
import { FxHeaderComponent } from './modules/fx-header/fx-header.component';
import { FxRoutingModule } from './routing/fx-routing.module';
import { FxNavListComponent } from './modules/fx-header/components/fx-nav-list/fx-nav-list.component';
import { FxHeaderViewComponent } from './modules/fx-header/components/view/view.component';
import { FxContentComponent } from './modules/fx-content/fx-content.component';
import { FxHomeComponent } from './modules/fx-content/components/fx-home/fx-home.component';
import { FxServiceComponent } from './modules/fx-content/components/fx-service/fx-service.component';
import { FxAboutUsComponent } from './modules/fx-content/components/fx-about-us/fx-about-us.component';
import { FxContactUsComponent } from './modules/fx-content/components/fx-contact-us/fx-contact-us.component';
import { FxSearchComponent } from './modules/fx-content/components/fx-home/components/fx-search/fx-search.component';
import { FxServicesListComponent } from './modules/fx-content/components/fx-home/components/fx-services-list/fx-services-list.component';
import { FxHomeViewComponent } from './modules/fx-content/components/fx-home/components/fx-home-view/fx-home-view.component';
import { FxStandardQualityCardComponent } from './modules/fx-content/components/fx-about-us/components/fx-standard-quality-card/fx-standard-quality-card.component';
import { FxAboutUsCardComponent } from './modules/fx-content/components/fx-about-us/components/fx-about-us-card/fx-about-us-card.component';
import { FxAboutUsViewComponent } from './modules/fx-content/components/fx-about-us/components/fx-about-us-view/fx-about-us-view.component';
import { FxAdvertisementCardComponent } from './modules/fx-content/components/fx-about-us/components/fx-advertisement-card/fx-advertisement-card.component';
import { FxCustomerReviewCarouselComponent } from './modules/fx-content/components/fx-about-us/components/fx-customer-review-carousel/fx-customer-review-carousel.component';



@NgModule({
  declarations: [
    ViewComponent,
    FxHeaderViewComponent,
    FxContentComponent,
    FxFooterComponent,
    FxHeaderComponent,
    FxNavListComponent,
    FxHomeComponent,
    FxServiceComponent,
    FxAboutUsComponent,
    FxContactUsComponent,
    FxSearchComponent,
    FxServicesListComponent,
    FxHomeViewComponent,
    FxStandardQualityCardComponent,
    FxAboutUsCardComponent,
    FxAboutUsViewComponent,
    FxAdvertisementCardComponent,
    FxCustomerReviewCarouselComponent
  ],
  imports: [
    CommonModule,
    FxRoutingModule,
    LibraryModule
  ],
  exports: [
    ViewComponent
  ]
})
export class FixitModule { }
