import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order';
import { Router, ActivatedRoute } from '@angular/router';

const url = 'http://localhost:8080/PizzaOrdering/menu';

export class OrderService {

    constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
    }

    submitOrder(order: Order) {
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
