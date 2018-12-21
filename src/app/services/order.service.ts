import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order';
import { Router, ActivatedRoute } from '@angular/router';
import { Users } from '../models/users';

const url = 'http://localhost:8080/PizzaOrdering/menu';

@Injectable({ providedIn: 'root' })
export class OrderService {

    constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
    }

    submitOrder(order: Order) {
        let user = new Users();
        user = JSON.parse(localStorage.getItem('currentUser'));
        console.log(user);
        /*order.customerId = user.userId;*/
        console.log(order);
        return this.http.post(url, order)
        .subscribe(
            data => {
                    // this.alertService.success('Registration successful', true);
                    alert('Order has been placed!');
                },
                error => {
                    alert('Oops, an error has occured.');
                });
    }
}
