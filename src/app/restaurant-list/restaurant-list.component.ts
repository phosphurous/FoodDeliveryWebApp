// Is responsible for just displaying the list of restaurants

import { Restaurant } from './../restaurant';

import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css'],
  //Define that this component has an input
	//inside the square brackets property specified is going to have to match the one in restaurant-center.html
  inputs: ['restaurants'],
  
  outputs:['SelectRestaurant']
})
export class RestaurantListComponent implements OnInit {
	
	public SelectRestaurant = new EventEmitter();
	
	constructor() { }

	ngOnInit() {
	}
	
	onSelect(rest: Restaurant)
	{
		//when a user selects a particular restaurant, sending out an event with information about that particular restaurant.
		this.SelectRestaurant.emit(rest);
	}

}
