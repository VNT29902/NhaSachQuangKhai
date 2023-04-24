import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ProductComponent } from '../component/product/product.component';
import { HomeBannerModule } from './home-banner.module';
import { IconsModule } from './icons.module';
import { OrderModule } from './order.module';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgFor,
    NgbPaginationModule,
    IconsModule,
    HomeBannerModule,
    OrderModule,
  ],
  declarations: [ProductComponent]
})
export class ProductModule { }
