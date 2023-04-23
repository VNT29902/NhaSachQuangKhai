import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IconsModule } from './icon/icons.module';
import { HomeBannerModule } from './module/home-banner.module';
import { ProductModule } from './module/product.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ProductDetailModule } from './module/product-detail.module';
import { OrderModule } from './module/order.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    NgbDropdownModule,
    IconsModule,
    HomeBannerModule,
    ProductModule,
    ProductDetailModule,
    OrderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
