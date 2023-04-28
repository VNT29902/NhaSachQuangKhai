import { CommonModule, NgFor } from "@angular/common";
import { NgModule } from "@angular/core";
import { OrderComponent } from "../component/order/order.component";
import { IconsModule } from "./icons.module";
import { HomeBannerModule } from "./home-banner.module";
import { AppRoutingModule } from "../app-routing.module";

@NgModule({
  imports: [
    CommonModule,
    HomeBannerModule,
    NgFor,
    IconsModule,
    AppRoutingModule
  ],
  declarations: [
    OrderComponent
  ],
  exports: [
    OrderComponent
  ]
})
export class OrderModule { }