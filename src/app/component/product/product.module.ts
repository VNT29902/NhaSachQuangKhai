import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { HomeBannerModule } from '../home-banner/home-banner.module';

@NgModule({
  imports: [
    CommonModule,
    HomeBannerModule
  ],
  declarations: [ProductComponent]
})
export class ProductModule { }
