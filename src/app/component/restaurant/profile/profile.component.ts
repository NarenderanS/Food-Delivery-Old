import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class RestaurantProfileComponent {
  name='';
  error=""
  constructor(){}
  
  onSubmit(login: NgForm) {}

}
