import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HomeComponent } from './component/home/home.component';
import { AdminHomeComponent } from './component/admin/home/home.component';
import { authGuard } from './guard/auth.guard';
import { RestaurantHomeComponent } from './component/restaurant/home/home.component';
import { ProductComponent } from './component/product/product.component';
import { CartComponent } from './component/cart/cart.component';
import { OrderComponent } from './component/order/order.component';
import { ProfileComponent } from './component/profile/profile.component';
import { CategoryComponent } from './component/category/category.component';
import { OrdersComponent } from './component/restaurant/orders/orders.component';
import { RestaurantProfileComponent } from './component/restaurant/profile/profile.component';
import { UserDetailsComponent } from './component/admin/user-details/user-details.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  {
    path: 'admin/home',
    component: AdminHomeComponent,
    canActivate: [authGuard],
  },{path:'admin/userDetails',component:UserDetailsComponent},
  { path: 'restaurant/:id', component: RestaurantHomeComponent },
  {path:'restaurant_orders',component:OrdersComponent},
  {path:'restaurant_profile',component:RestaurantProfileComponent},
  { path: 'product/:id', component: ProductComponent },
  { path: 'category/:id', component: CategoryComponent },
  { path: 'cart', component: CartComponent },
  { path: 'order', component: OrderComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
