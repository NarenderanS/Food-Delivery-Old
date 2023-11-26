import { Component } from '@angular/core';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
})
export class OrdersComponent {
  orders:any=[]
  constructor(private orderService:OrderService){
    orderService.getAllOrders().subscribe({});
  }


}
