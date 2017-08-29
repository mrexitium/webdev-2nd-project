import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CollectionComponent } from './collection/collection.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { Page404Component } from './page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    CollectionComponent,
    ProductComponent,
    ContactComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: HomepageComponent },
      { path: 'products', component: CollectionComponent },
      { path: 'product/:id', component: ProductComponent },
      { path: 'contact', component: ContactComponent },
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: '**', component: Page404Component }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
