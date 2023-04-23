import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../config/constant';
import { Product } from '../model/response/product';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // attributes
  private orderedProducts: Subject<Product> = new Subject<Product>();
  orderedProducts$ = this.orderedProducts.asObservable();

  rawOrderedProducts: Product[] = [];
  totalAmount = 0;
  totalQuantity = 0;

  constructor(private http: HttpClient) { }

  // methods
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(Constant.API_ENDPOINT + "/product");
  }

  addOrderedProduct(product: Product) {
    // this.orderedProducts.next(product);
    this.rawOrderedProducts.push(product);
    this.totalQuantity++;
  }

  getRawOrderedProducts(): Product[] {
    return this.rawOrderedProducts;
  }

  countTotalAmount(products: Product[]): number {
    return products.reduce((sum, product) => sum + product.price, 0);
  }

  getTotalQuantity(): number {
    return this.totalQuantity;
  }
}
