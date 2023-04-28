import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProductService } from './service/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'nha-nam-book-store';
  public isMenuCollapsed = true;
  totalQuantity: Observable<number>;

  constructor(private productService: ProductService) {
    console.log(environment.production); // Logs false for development environment
    this.totalQuantity = this.productService.sharedTotalQuantity$; // shallow copy
  }

}
