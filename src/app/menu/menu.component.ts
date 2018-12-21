import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order';
import {OrderService} from '../services/order.service';


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

  buyLargePepperoni() {
    const customerOrder = new Order();
    customerOrder.description = 'Large Pepperoni Pizza';
    customerOrder.price = 11.99;
    console.log(customerOrder.description + 'Price: $' + customerOrder.price);
    this.orderService.submitOrder(customerOrder);
  }

  buyLargeVeggie() {
    const customerOrder = new Order();
    customerOrder.description = 'Large Veggie Pizza';
    customerOrder.price = 13.99;
    console.log(customerOrder.description + 'Price: $' + customerOrder.price);
    this.orderService.submitOrder(customerOrder);
  }

  buyLargeBBQChicken() {
    const customerOrder = new Order();
    customerOrder.description = 'Large BBQ Chicken Pizza';
    customerOrder.price = 13.99;
    console.log(customerOrder.description + 'Price: $' + customerOrder.price);
    this.orderService.submitOrder(customerOrder);
  }

  buyLargeAllMeat() {
    const customerOrder = new Order();
    customerOrder.description = 'Large All Meat Pizza';
    customerOrder.price = 13.99;
    console.log(customerOrder.description + 'Price: $' + customerOrder.price);
    this.orderService.submitOrder(customerOrder);
  }

  buyLargeCheese() {
    const customerOrder = new Order();
    customerOrder.description = 'Large Cheese Pizza';
    customerOrder.price = 8.99;
    console.log(customerOrder.description + 'Price: $' + customerOrder.price);
    this.orderService.submitOrder(customerOrder);
  }

  readLocalStorageValue() {
    const key = localStorage.getItem('currentUser');
    if (key === null) {
      return undefined;
    }
    return true;
  }

}
