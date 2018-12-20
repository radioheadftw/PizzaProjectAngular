import { Component, OnInit } from '@angular/core';
import {Order} from '../models/order';
import { LineItem } from '../models/lineitem';
import { Users } from '../models/users';
import { OrderService} from '../services/order.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  buyLargePepperoni() {
    const customerOrder = new Order();
    const lineItem = new LineItem();
    lineItem.description = 'Large Pepperoni Pizza';
    lineItem.price = 11.99;
    lineItem.quantity = 1;
    console.log(lineItem.quantity +  ' x ' + lineItem.description + 'Price: $' + lineItem.price );
  }

  buyLargeVeggie() {
    const customerOrder = new Order();
    const lineItem = new LineItem();
    lineItem.description = 'Large Veggie Pizza';
    lineItem.price = 13.99;
    lineItem.quantity = 1;
    console.log(lineItem.quantity +  ' x ' + lineItem.description + 'Price: $' + lineItem.price );
  }

  buyLargeBBQChicken() {
    const customerOrder = new Order();
    const lineItem = new LineItem();
    lineItem.description = 'Large BBQ Chicken Pizza';
    lineItem.price = 13.99;
    lineItem.quantity = 1;
    console.log(lineItem.quantity +  ' x ' + lineItem.description + 'Price: $' + lineItem.price );
  }

  buyLargeAllMeat() {
    const customerOrder = new Order();
    const lineItem = new LineItem();

    lineItem.description = 'Large All Meat Pizza';
    lineItem.price = 13.99;
    lineItem.quantity = 1;
    console.log(lineItem.quantity +  ' x ' + lineItem.description + 'Price: $' + lineItem.price );
  }

  buyLargeCheese() {
    const customerOrder = new Order();
    const lineItem = new LineItem();
    lineItem.description = 'Large Cheese Pizza';
    lineItem.price = 8.99;
    lineItem.quantity = 1;

    console.log(lineItem.quantity +  ' x ' + lineItem.description + 'Price: $' + lineItem.price );
  }

  readLocalStorageValue() {
    const key = localStorage.getItem('currentUser');
    if (key === null) {
      return undefined;
    }
    return true;
  }

}
