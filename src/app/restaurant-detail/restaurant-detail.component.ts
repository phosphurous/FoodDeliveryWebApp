// Is responsible for just displaying a detail of particular restaurants
import { Component, OnInit, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css'],
  
  inputs: ['restaurant'],
  outputs: ['updateRestaurantEvent', 'deleteRestaurantEvent']
})
export class RestaurantDetailComponent implements OnInit {
	restaurant: any;
	
	private editName: boolean = false;
	
	private updateRestaurantEvent = new EventEmitter();
	private deleteRestaurantEvent = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  ngOnChanges()
  {
	  //after making changes, when the tab is navigated away, the property will get set to false again which will hide the input tag and display the heading tag instead.
	  this.editName = false;
  }
  
  onNameClick()
  {
	  this.editName = true;
  }
  
  //emit this.restaurant. The restaurant detail that is currently viewing will be sent out, when clicked on the update button.
  updateRestaurant()
  {
	  this.updateRestaurantEvent.emit(this.restaurant);
  }
  
  deleteRestaurant()
  {
	  //deleteRestaurantEvent.emit the restaurant that has to be deleted.
	  this.deleteRestaurantEvent.emit(this.restaurant);
  }
 

}
