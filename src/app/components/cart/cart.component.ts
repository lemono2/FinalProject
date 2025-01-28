import { Component } from '@angular/core';
import {Product} from '../../interfaces/product';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  standalone: false
})
export class CartComponent {
  cartItems: { product: Product; quantity: number }[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.updateTotalPrice();
  }

  updateTotalPrice(): void {
    this.totalPrice = this.cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }

  removeFromCart(product: Product): void {
    this.cartService.removeFromCart(product);
    this.cartItems = this.cartService.getCartItems();
    this.updateTotalPrice();
  }

  increaseQuantity(product: Product): void {
    this.cartService.increaseQuantity(product);
    this.updateTotalPrice();
  }

  decreaseQuantity(product: Product): void {
    this.cartService.decreaseQuantity(product);
    this.cartItems = this.cartService.getCartItems();
    this.updateTotalPrice();
  }
}
