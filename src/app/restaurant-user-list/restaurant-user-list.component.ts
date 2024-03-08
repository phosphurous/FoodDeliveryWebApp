import { Component, OnInit, EventEmitter } from '@angular/core';

import { Restaurant } from './../restaurant';

@Component({
  selector: 'restaurant-user-list',
  templateUrl: './restaurant-user-list.component.html',
  styleUrls: ['./restaurant-user-list.component.css'],
  inputs: ['restaurants'],
  outputs:['SelectRestaurant']
})
export class RestaurantUserListComponent implements OnInit {

	//It triggers an event to which anyone can listen
  public SelectRestaurant = new EventEmitter();
  
	constructor() {
	
	}

	ngOnInit() {
	}
	
	onSelect(rest: Restaurant)
	{
		//when a user selects a particular restaurant, sending out an event with information about that particular restaurant.
		this.SelectRestaurant.emit(rest);
	}

}
