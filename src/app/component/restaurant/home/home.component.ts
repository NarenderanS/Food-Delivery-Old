import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { HomeService } from 'src/app/service/home.service';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/service/storage.service';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/model/product';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category.service';
import { NgForm } from '@angular/forms';
import { AppResponse } from 'src/app/model/appResponse';
import { AppUser } from 'src/app/model/appUser';

@Component({
  selector: 'restaurant-home',
  templateUrl: './home.component.html',
})
export class RestaurantHomeComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];
  user: AppUser = this.storageService.getLoggedInUser();
  count = 0;
  id = parseInt(this.router.url.split('/')[2]);
  constructor(
    private router: Router,
    private storageService: StorageService,
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (response: any) => {
        let products: Product[] = response.data;
        console.log(response.data[0]);
        if (products.length > 0) {
          this.products = products;
        }
      },
    });
    this.categoryService.getAllCategory().subscribe({
      next: (response: any) => {
        let categories: Category[] = response.data;
        if (categories.length > 0) {
          this.categories = categories;
        }
      },
    });
  }
 
 
 
  isUserLoggedIn(): boolean {
    return this.storageService.isUserLoggedIn();
  }
  productDetails(id: number): void {
    this.productService.productDetails(id);
    this.router.navigate(['product', id]);
  }
  categoryProducts(id: number): void {
    this.productService.productDetails(id);
    this.router.navigate(['category', id]);
  }
  restaurantOrders(id: number): void {
    this.router.navigate(['restaurant_orders']);
  }
}
