import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyServiceService } from './myservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
    productList: string[] = [];

  constructor(private myService: MyServiceService) {}

  ngOnInit() {
    this.productList = this.myService.getProducts();
  }

  addNewProduct() {
    const newProduct = prompt('Enter new product name:');
    if (newProduct) {
      this.myService.addProduct(newProduct);
    }
  }
}
