import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'; //import home components

import { AboutusComponent } from './aboutus/aboutus.component'; //import about components

import { AddrestComponent } from './addrest/addrest.component'; //import addrest components

import { RestaurantCenterComponent } from './restaurant-center/restaurant-center.component'; //import restaurantcenter

import { ProductComponent } from './product/product.component'; //import productsmenu
import { Product2Component } from './product2/product2.component'; //import productsmenu

import { CartComponent } from './cart/cart.component';
import { UserCheckoutComponent } from './user-checkout/user-checkout.component';

import { RestaurantUserComponent } from './restaurant-user/restaurant-user.component';
import { ProductadminComponent } from './productadmin/productadmin.component';

//authenguard with register/login
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'addrest', component: AddrestComponent },
  { path: 'restaurants', component: RestaurantCenterComponent, canActivate: [AuthGuard] },
  { path: 'restaurantsUser', component: RestaurantUserComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product2', component: Product2Component },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: UserCheckoutComponent },
  
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  
  { path: 'productadmin', component: ProductadminComponent },
  
  { path: '', component: HomeComponent, pathMatch: 'full'} // redirect to home page on load
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);