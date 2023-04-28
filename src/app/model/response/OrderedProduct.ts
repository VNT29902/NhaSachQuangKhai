import { Product } from "./product";

export class OrderedProduct {
  product: Product;
  quantity: number;
  amount: number;

  constructor(product: Product, quantity: number) {
    this.product = product;
    this.quantity = quantity;
    this.amount = this.product.price * this.quantity;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
      this.countAmount();
    }
  }

  increaseQuantity() {
    this.quantity++;
    this.countAmount();
  }

  countAmount(): number {
    return this.amount = this.product.price * this.quantity;
  }
}