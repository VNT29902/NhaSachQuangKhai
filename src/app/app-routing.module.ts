import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeBannerComponent } from './component/home-banner/home-banner.component';
import { ProductComponent } from './component/product/product.component';

// const routes: Routes = [
//   {path: "", component: LoginComponent},
//   {path: "order", component: OrderComponent, canActivate: [AuthGuard]},
//   {path: "order/:orderDetailId", component: OrderDetailComponent, canActivate: [AuthGuard]},
//   {path: "product", component: ProductComponent, canActivate: [AuthGuard]},
//   {path: "create-product", component: ProductDetailComponent, canActivate: [AuthGuard]},
//   {path: "product/:productId", component: ProductDetailComponent, canActivate: [AuthGuard]},
//   {path: "category", component: CategoryComponent, canActivate: [AuthGuard]},
//   {path: "ad", component: AdComponent, canActivate: [AuthGuard]},
//   {path: "ad/:id", component: AdDetailComponent, canActivate: [AuthGuard]},
//   {path: "create-ad", component: AdDetailComponent, canActivate: [AuthGuard]},
//   {path: "customer", component: CustomerComponent, canActivate: [AuthGuard]},
//   {path: "payment-info", component: PaymentInfoComponent, canActivate: [AuthGuard]}
// ];

const routes: Routes = [
  {path: "", component: ProductComponent},
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [];

// export const routingComponents = [LoginComponent, OrderComponent,
//   ProductComponent,
//   CategoryComponent,
//   AdComponent,
//   CustomerComponent,
//   PaymentInfoComponent,
//   OrderDetailComponent,
//   ProductDetailComponent,
// ]
