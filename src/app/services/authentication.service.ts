import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Users } from '../models/users';

// const config = 'http://ec2-54-202-187-64.us-west-2.compute.amazonaws.com:8080/Pizza';
const config = 'http://localhost:8080/PizzaOrdering/login';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<Users>;
    public currentUser: Observable<Users>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<Users>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): Users {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        const users = new Users();
        users.password = password;
        users.username = username;
        console.log(users);
        console.log(config);
        return this.http.post<Users>(config, users);
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
