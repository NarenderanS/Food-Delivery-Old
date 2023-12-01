import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { AppResponse } from 'src/app/model/appResponse';
import { AppUser } from 'src/app/model/appUser';
import { Order } from 'src/app/model/order';
import { Product } from 'src/app/model/product';
import { OrderService } from 'src/app/service/order.service';
import { StorageService } from 'src/app/service/storage.service';
import { CONSTANT } from 'src/app/utils/constant';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
})
export class OrderComponent implements OnInit {
  options: AnimationOptions = {
    path: '/assets/emptyCart.json',
  };
  orders: any = [];
  user: AppUser = this.storageService.getLoggedInUser();
  adminOrders:any=[];
  total = 0;

  constructor(
    private storageService: StorageService,
    private orderService: OrderService
  ) {
    orderService.getOrderedProducts(this.user.id).subscribe({
      next: (response: AppResponse) => {
        this.orders = response.data;
        console.log(this.orders);
        console.log(this.orders[1].orderStatus);
        for (let i of this.orders) {
          // console.log(i.orderedProducts)
          // console.log(i.address)
        }
      },
    });
    orderService.getAllOrders().subscribe({
      next: (response: AppResponse) => {
        this.adminOrders = response.data;
        console.log(this.adminOrders);
        console.log(this.adminOrders[1].orderStatus);
        for (let i of this.orders) {
          // console.log(i.orderedProducts)
          // console.log(i.address)
        }
      },
    });
  }

  ngOnInit(): void {}
  getOrdersCount(): number {
    return this.orders.length;
  }
  getAllOrdersCount(){
    return this.adminOrders.length;
  }
  reOrder(orderId: number) {
    // console.log(orderId)
    for (let order of this.orders) {
      if (order.id === orderId) {
        for (let product of order.orderedProducts) {
          console.log(product.id);
          let item = {
            userId: order.userId,
            productId: product.id,
            count: product.count,
          };

        }
      }
    }
  }
  timeStampConvertor(timeStamp:any):String{
    getLocaleDateFormat
    return timeStamp;
  }

  getPrice(p:Product[]):number{
    let price:number=0;
    for(let item of p)
    {
        price+=item.price;
    }
    return price;
  }
  isUser(): boolean {
    if (this.user.role === CONSTANT.USER)
      return true;
    return false;
  }
}
