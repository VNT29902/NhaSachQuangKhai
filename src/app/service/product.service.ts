import { OrderedProduct } from './../model/response/OrderedProduct';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../config/constant';
import { Product } from '../model/response/product';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // attributes
  private orderedProducts: Subject<Product> = new Subject<Product>();
  private sharedTotalQuantity: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  orderedProducts$ = this.orderedProducts.asObservable();
  sharedTotalQuantity$ = this.sharedTotalQuantity.asObservable();

  rawOrderedProducts: OrderedProduct[] = [];
  totalAmount = 0;
  totalQuantity = 0;

  constructor(private http: HttpClient) { }

  // methods
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(Constant.API_ENDPOINT + "/product");
  }

  addOrderedProduct(product: Product) {
    // this.orderedProducts.next(product);
    const iExistedProduct = this.rawOrderedProducts.findIndex(ordered => ordered.product.documentID === product.documentID);

    if (iExistedProduct > -1) {
      const existingProduct = this.rawOrderedProducts[iExistedProduct];
      const price = existingProduct.product.price;
      existingProduct.quantity++;
      existingProduct.amount = existingProduct.amount + price;
    } else {
      const newProduct = new OrderedProduct(product, 1) ;
      this.rawOrderedProducts.push(newProduct);
    }
    this.setTotalQuantity(this.totalQuantity + 1);
  }

  getRawOrderedProducts(): OrderedProduct[] {
    return this.rawOrderedProducts;
  }

  countTotalAmount(OrderedProducts: OrderedProduct[]): number {
    return OrderedProducts.reduce((sum, orderedProduct) => sum + orderedProduct.amount, 0);
  }

  setTotalQuantity(quantity: number): void {
    if (quantity >= 0) {
      this.totalQuantity = quantity;
      this.sharedTotalQuantity.next(this.totalQuantity);
    }
  }

  getTotalQuantity(): number {
    this.produceTotalQuantity();
    return this.totalQuantity;
  }

  produceTotalQuantity() {
    this.sharedTotalQuantity.next(this.totalQuantity);
  }
}
