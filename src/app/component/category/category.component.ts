import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
})
export class CategoryComponent {
  count=0;
  constructor(private productService:ProductService,private router:Router){}
  productDetails(id: number): void {
    this.productService.productDetails(id);
    this.router.navigate(['product', id]);
  }
  getProductCount(id:number):number{
    return 0;
  }
  addToCart(id: number, operator = '+'): void {
    
  }

}
