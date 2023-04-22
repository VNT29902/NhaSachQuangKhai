import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { HomeBannerModule } from './home-banner.module';
import { ProductDetailComponent } from '../component/product-detail/product-detail.component';

@NgModule({
  imports: [
    CommonModule,
    HomeBannerModule,
    NgFor
  ],
  declarations: [ProductDetailComponent]
})
export class ProductDetailModule { }
