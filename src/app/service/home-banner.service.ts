import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../config/constant';

@Injectable({
  providedIn: 'root'
})
export class HomeBannerService {

  // attributes

  constructor(private http: HttpClient) { }

  // methods
  getHomeBanner() {
    return this.http.get<string[]>(Constant.API_ENDPOINT + "/home-banner");
  }
}