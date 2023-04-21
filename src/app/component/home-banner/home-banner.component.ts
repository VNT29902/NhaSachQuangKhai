import { Component, OnInit } from '@angular/core';
import { HomeBannerService } from 'src/app/service/home-banner.service';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.css']
})
export class HomeBannerComponent implements OnInit {

  images: string[] = [];

  constructor(private homeBannerService: HomeBannerService) { }

  ngOnInit() {
    this.getHomeBanner();
  }

  getHomeBanner() {
    this.homeBannerService.getHomeBanner().subscribe(
      data => {
        // shallow copy
        this.images = data;
      }
    );
  }
}
