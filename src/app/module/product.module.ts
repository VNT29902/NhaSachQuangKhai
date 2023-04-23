import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ProductComponent } from '../component/product/product.component';
import { HomeBannerModule } from './home-banner.module';
import { IconsModule } from '../icon/icons.module';

@NgModule({
  imports: [
    CommonModule,
    HomeBannerModule,
    NgFor,
    IconsModule
  ],
  declarations: [ProductComponent]
})
export class ProductModule { }
