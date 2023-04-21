import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../component/product/product.component';
import { HomeBannerModule } from './home-banner.module';

@NgModule({
  imports: [
    CommonModule,
    HomeBannerModule
  ],
  declarations: [ProductComponent]
})
export class ProductModule { }
