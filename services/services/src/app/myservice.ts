import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // 👈 makes it available app-wide (singleton)
})
export class MyServiceService {

  products = ['Laptop', 'Mobile', 'Tablet'];

  constructor() { }

  getProducts() {
    return this.products;
  }

  addProduct(product: string) {
    this.products.push(product);
  }
}

