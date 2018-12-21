import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order';
import {OrderService} from '../services/order.service';
import { Users } from '../models/users';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
  }

  sendOrder(order: string, price: number) {
    const customerOrder = new Order();
    const newUsers = JSON.parse(localStorage.getItem('currentUser'));
    customerOrder.setCustomer(JSON.parse(localStorage.getItem('currentUser')));
    console.log('the customer item: ' + customerOrder.customerId);
    customerOrder.description = order;
    customerOrder.price = price;
    console.log(customerOrder.description + 'Price: $' + customerOrder.price);
    this.orderService.submitOrder(customerOrder);
  }
  buyLargePepperoni() {
    this.sendOrder('Large Pepperonni', 11.99);
  }

  buyLargeVeggie() {
    this.sendOrder('Large Veggie', 13.99);
  }

  buyLargeBBQChicken() {
    this.sendOrder('Large BBQ Chicken', 13.99);
  }

  buyLargeAllMeat() {
    this.sendOrder('Large All Meat', 14.99);
  }

  buyLargeCheese() {
    this.sendOrder('Large Cheese', 8.99);
  }

  readLocalStorageValue() {
    const key = localStorage.getItem('currentUser');
    if (key === null) {
      return undefined;
    }
    return true;
  }

}
