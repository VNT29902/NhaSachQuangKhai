import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../config/constant';
import { Product } from '../model/response/product';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // attributes

  constructor(private http: HttpClient) { }

  // methods
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(Constant.API_ENDPOINT + "/product");
  }
}
