import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent {
  product:any=[];
  count=0;
  id=parseInt(this.router.url.split('/')[2])
  
  constructor(private router: Router,private storageService:StorageService,private productService:ProductService) {
    
    this.productService.productDetails(this.id).subscribe({
      next: (response: any) => {
        let product: Product = response.data;
        console.log(product)
       
          this.product = product;
        
      },
    });
  
  }
  addToCart(id: number, operator = '+'): void {
    // this.productService.addToCart(id, operator);
  }
  getProductCount(id: number): number {
    // this.count = this.productService.getProductCount(id);
    return this.count;
  }
  isUserLoggedIn():boolean{
    return this.storageService.isUserLoggedIn();
  }
  

}
