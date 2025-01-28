import { Injectable } from '@angular/core';
import {Product} from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {}

  private products: Product[] = [
    { id: 1, name: 'HeadSet', description: 'Hear it all. Say it all.', price: 10.0, imageUrl: '/images/headset.png' },
    { id: 2, name: 'Monitor', description: 'Experience Stunning Visuals', price: 15.0, imageUrl: '/images/monitor.png' },
    { id: 3, name: 'Pc', description: 'Unleash Your Potential with Unmatched Power', price: 20.0, imageUrl: '/images/product1.jpg' },
  ];

  getProducts(): Product[] {
    return [...this.products];
  }

  getProductById(id: number): Product | undefined {
    return this.products.find((product) => product.id === id);
  }

}
