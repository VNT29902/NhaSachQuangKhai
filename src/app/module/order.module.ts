import { CommonModule, NgFor } from "@angular/common";
import { NgModule } from "@angular/core";
import { OrderComponent } from "../component/order/order.component";
import { IconsModule } from "../icon/icons.module";
import { HomeBannerModule } from "./home-banner.module";

@NgModule({
  imports: [
    CommonModule,
    HomeBannerModule,
    NgFor,
    IconsModule
  ],
  declarations: [
    OrderComponent
  ],
  exports: [
    OrderComponent
  ]
})
export class OrderModule { }