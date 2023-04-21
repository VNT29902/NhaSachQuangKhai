/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HomeBannerService } from './home-banner.service';

describe('Service: HomeBanner', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeBannerService]
    });
  });

  it('should ...', inject([HomeBannerService], (service: HomeBannerService) => {
    expect(service).toBeTruthy();
  }));
});
