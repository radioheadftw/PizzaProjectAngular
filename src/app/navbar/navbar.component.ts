import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    localStorage.removeItem('currentUser');
    window.location.href = 'http://localhost:4200/login';
  }

  readLocalStorageValue() {
    const key = localStorage.getItem('currentUser');
    if (key === null) {
      return undefined;
    }
    return true;
  }
}
