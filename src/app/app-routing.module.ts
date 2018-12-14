import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CartComponent} from './cart/cart.component';
import {DealsComponent} from './deals/deals.component';
import {TrackerComponent} from './tracker/tracker.component';
import {HomeComponent} from './home/home.component';
import {SignupComponent} from './signup/signup.component';
import {MenuComponent} from './menu/menu.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'deals', component: DealsComponent},
  {path: 'tracker', component: TrackerComponent},
  {path: 'cart', component: CartComponent},
  {path: 'createaccount', component: SignupComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
