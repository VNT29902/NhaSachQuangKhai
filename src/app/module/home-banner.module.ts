import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { HomeBannerComponent } from '../component/home-banner/home-banner.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule,
    NgIf
  ],
  declarations: [
    HomeBannerComponent
  ],
  exports: [
    HomeBannerComponent
  ]
})
export class HomeBannerModule { }