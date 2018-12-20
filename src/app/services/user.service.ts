import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Users } from '../models/users';

// const config = 'http://ec2-54-202-187-64.us-west-2.compute.amazonaws.com:8080';
const config = 'http://localhost:8080/PizzaOrdering';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    // getAll() {
        // return this.http.get<Users[]>(config + '/users');
    // }

    // getById(id: number) {
        // return this.http.get(`${config} + '/users/' + ${id}`);
    // }

    register(user: Users) {
        return this.http.post(`${config}/createaccount`, user);
    }

    // update(user: Users) {
        // return this.http.put(`${config}/users/${user.userId}`, user);
   // }

    // delete(id: number) {
        // return this.http.delete(`${config}/users/${id}`);
    // }
}
