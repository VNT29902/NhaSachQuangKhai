import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeBannerComponent } from './home-banner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HomeBannerComponent
  ],
  exports: [
    HomeBannerComponent
  ]
})
export class HomeBannerModule { }