import { Injectable } from '@angular/core';
import {Product} from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: { product: Product; quantity: number }[] = [];

  addToCart(product: Product): void {
    const existingItem = this.cartItems.find((item) => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({ product, quantity: 1 });
    }
  }

  removeFromCart(product: Product): void {
    this.cartItems = this.cartItems.filter((item) => item.product.id !== product.id);
  }

  increaseQuantity(product: Product): void {
    const item = this.cartItems.find((item) => item.product.id === product.id);
    if (item) {
      item.quantity += 1;
    }
  }

  decreaseQuantity(product: Product): void {
    const item = this.cartItems.find((item) => item.product.id === product.id);
    if (item) {
      item.quantity -= 1;
      if (item.quantity <= 0) {
        this.removeFromCart(product);
      }
    }
  }

  getCartItems(): { product: Product; quantity: number }[] {
    return [...this.cartItems];
  }

  clearCart(): void {
    this.cartItems = [];
  }
}
