import { Component, OnInit } from '@angular/core';

import { Restaurant } from './../restaurant';

import { RestaurantService } from './../restaurant.service';

@Component({
  selector: 'app-restaurant-user',
  templateUrl: './restaurant-user.component.html',
  styleUrls: ['./restaurant-user.component.css'],
  providers: [RestaurantService]
})
export class RestaurantUserComponent implements OnInit {

  	//an array of restaurant which have id,name,pic, desc.
	restaurants: Array<Restaurant>;
	
	selectedRestaurant: Restaurant;
	
	//by default the form is hidden which is responsible for creating a new video.
	private hidenewRestaurant: boolean = true;

	
  constructor(private _restaurantService: RestaurantService) 
  {
		
  }

  ngOnInit() {
	  //subscribe to the database service and fetch all the restaurants as response and assign it to the restaurants array at the top.
	  this._restaurantService.getRestaurants()
	  .subscribe(resRestaurantData => this.restaurants = resRestaurantData);
  }
  
  //take in a restaurant of type 'any'
  onSelectRestaurant(restaurant:any)
  {
	  //Equal to the restaurant that was just passed.
	  this.selectedRestaurant = restaurant;
	  this.hidenewRestaurant = true;
	  //log info in console.
	  console.log(this.selectedRestaurant);
  }
  

}
