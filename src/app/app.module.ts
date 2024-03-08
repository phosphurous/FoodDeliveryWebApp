import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// import { FilterPipe } from './pipes';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routing }  from './app.routing';

import { AboutusComponent } from './aboutus/aboutus.component';
import { AddrestComponent } from './addrest/addrest.component';
import { HomeComponent } from './home/home.component';

import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantCenterComponent } from './restaurant-center/restaurant-center.component';

import { ProductComponent } from './product/product.component';
import { ProductService } from './product/product.service';
import { CartComponent } from './cart/cart.component';

import { RestaurantUserComponent } from './restaurant-user/restaurant-user.component';
import { RestaurantUserDetailComponent } from './restaurant-user-detail/restaurant-user-detail.component';
import { RestaurantUserListComponent } from './restaurant-user-list/restaurant-user-list.component';

import { AgmCoreModule } from '@agm/core';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';

import { ProductadminComponent } from './productadmin/productadmin.component';
import { ProductadminService } from './productadmin/productadmin.service';
import { UserCheckoutComponent } from './user-checkout/user-checkout.component';

import { Product2Component } from './product2/product2.component';
import { Product2Service } from './product2/product2.service';

import { OwnerserviceService } from './addrest/ownerservice.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    AddrestComponent,
    HomeComponent,
	// FilterPipe,
	
	RestaurantListComponent,
	RestaurantDetailComponent,
	RestaurantCenterComponent,
	ProductComponent,
	CartComponent,
	AlertComponent,
    LoginComponent,
    RegisterComponent,
	RestaurantUserComponent,
	RestaurantUserDetailComponent,
	RestaurantUserListComponent,
	
	ProductadminComponent,
	UserCheckoutComponent,
	Product2Component
	
  ],
  imports: [
	AgmCoreModule.forRoot({
      apiKey: "AIzaSyB0GERB1AHMsxhXexzCRODEBudEmoXUYQg",
      libraries: ["places"]
    }),
    BrowserModule,
    FormsModule,
    HttpModule,
	routing,
	ReactiveFormsModule
  ],
  providers: [AuthGuard, 
		AlertService,
        AuthenticationService,
        UserService,

        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions, ProductService, ProductadminService, Product2Service, OwnerserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
