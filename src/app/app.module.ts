import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { Ng2CarouselamosModule } from "ng2-carouselamos";
import { DataService } from "./data.service";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CollectionComponent } from './collection/collection.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { Page404Component } from './page404/page404.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SvgIconsComponent } from './svg-icons/svg-icons.component';
import { HomepageHeaderComponent } from './homepage-header/homepage-header.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { BrandsComponent } from './brands/brands.component';
import { PromotionComponent } from './promotion/promotion.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { PromotionBannerComponent } from './promotion-banner/promotion-banner.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { CollectionHeaderComponent } from './collection-header/collection-header.component';
import { CollectionProductsComponent } from './collection-products/collection-products.component';
import { CollectionNewsletterComponent } from './collection-newsletter/collection-newsletter.component';
import { ContactHeaderComponent } from './contact-header/contact-header.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    CollectionComponent,
    ProductComponent,
    ContactComponent,
    Page404Component,
    NavigationComponent,
    SvgIconsComponent,
    HomepageHeaderComponent,
    NewsletterComponent,
    BrandsComponent,
    PromotionComponent,
    NewArrivalsComponent,
    PromotionBannerComponent,
    ReviewsComponent,
    CollectionHeaderComponent,
    CollectionProductsComponent,
    CollectionNewsletterComponent,
    ContactHeaderComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    Ng2CarouselamosModule,
    RouterModule.forRoot([
      { path: 'home', component: HomepageComponent },
      { path: 'products', component: CollectionComponent },
      { path: 'product/:id', component: ProductComponent },
      { path: 'contact', component: ContactComponent },
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: '**', component: Page404Component }
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
