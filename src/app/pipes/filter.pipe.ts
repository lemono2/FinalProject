import { Pipe, PipeTransform } from '@angular/core';
import {Product} from '../interfaces/product';

@Pipe({
  name: 'filter',
  standalone: false
})
export class FilterPipe implements PipeTransform {

  transform(products: Product[], searchQuery: string): Product[] {
    if (!products || !searchQuery) {
      return products;
    }
    const lowercaseQuery = searchQuery.toLowerCase();
    return products.filter((product) =>
      product.name.toLowerCase().includes(lowercaseQuery)
    );
  }

}
