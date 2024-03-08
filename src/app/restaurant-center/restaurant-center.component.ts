import { Component, OnInit } from '@angular/core';

import { Restaurant } from './../restaurant';

import { RestaurantService } from './../restaurant.service';

import { User } from '../_models/index';
import { UserService } from '../_services/index';

@Component({
  selector: 'app-restaurant-center',
  templateUrl: './restaurant-center.component.html',
  styleUrls: ['./restaurant-center.component.css'],
  providers: [RestaurantService]
})

//Gets the current user from local storage and all users from the user service, 
	//and makes them available to the template.

export class RestaurantCenterComponent implements OnInit {
	
	//an array of restaurant which have id,name,pic, desc.
	restaurants: Array<Restaurant>;
	
	selectedRestaurant: Restaurant;
	
	showHide: boolean = true;
	
	currentUser: User;
    users: User[] = [];

	//by default the form is hidden which is responsible for creating a new video.
	private hidenewRestaurant: boolean = true;

	
  constructor(private _restaurantService: RestaurantService, private userService: UserService) 
  {
		this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
	  //subscribe to the database service and fetch all the restaurants as response and assign it to the restaurants array at the top.
	  this._restaurantService.getRestaurants()
	  .subscribe(resRestaurantData => this.restaurants = resRestaurantData);
	  
	   this.loadAllUsers();
  }
  
      deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
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
  
  //Step 3.
  //after subscribing to the response, i pushed it into the array so that the UI gets updated, then the form disappears, then the selected restaurant is set to the current restaurant so that the detailed view of that restaurant appears.
  onSubmitAddRestaurant(restaurant: Restaurant)
  {
	  //calling the restaurantService, the addRestaurant method, passing in the particular restaurant data.
	  this._restaurantService.addRestaurant(restaurant)
	  //in order to get back the data, we need to subscribe to the service. When we subscribe, we get the response of the new Restaurant that was inserted.
		.subscribe(resNewRestaurant => 
		{
			//As it is not enough to just insert in to the database, we also need to show it in the UI. 
			//Hence, in the restaurants array, we are going to push the new restaurant.
			this.restaurants.push(resNewRestaurant);
			this.hidenewRestaurant = true;
			//Set the new restaurant to equal to the selected restaurant so that a detailed view of the insert restaurant will appear.
			this.selectedRestaurant = resNewRestaurant;
		});
  }
  
			//takes in the restaurant (v)
  onUpdateRestaurantEvent(restaurant: any)
  {
	  //onUpdateRestaurantEvent calls the updateRestaurant method of the _restaurantService to pass in the restaurant data. 
	  this._restaurantService.updateRestaurant(restaurant)
	  //subscribe to get back the updated restaurant data and then assign it to this (v)
		.subscribe(resUpdatedRestaurant => restaurant = resUpdatedRestaurant);
		
	  //the detailed view clears out.
	  this.selectedRestaurant = null;
  };
  
  //getting access to the restaurant that has to be deleted.
  onDeleteRestaurantEvent(restaurant: any) {
	 
	//create an array which equals to the list of restaurants that was fetched from the database.
    let restaurantArray = this.restaurants;
	
	//using the restaurantService instance, I am going to call the deleteRestaurant method which is going to delete a restaurant data and then send back the response of the deleted restaurant.
    this._restaurantService.deleteRestaurant(restaurant)
	
	//to do that, I need to subscribe to get a response of the deleted restaurant data. 
	//(This is actually to update the UI. The deletion has already happened before coming to this method.)
      .subscribe(resDeletedRestaurant => {
		  
		//within this array, i am going to iterate over every restaurant data until the code finds a particular ID match. 
        for (let i = 0; i < restaurantArray.length; i++) 
		{
		  //if the video in the array equals to the id that I want to delete,
          if (restaurantArray[i]._id === restaurant._id) 
		  {
			//Splicing that ID that i want to delete from the array. 
			//For example we have 3 data, i want to delete the third video, i will equal to 2 because n-1 as we starts from 0.
            restaurantArray.splice(i, 1);
          }
        }
      });
	
	//thus, after deleting, the selectedRestaurant data will equal to null.
    this.selectedRestaurant = null;
  };
  
  newRestaurant()
  {
	  if (this.hidenewRestaurant == true) 
	  {
		  this.hidenewRestaurant = false
      }
	  else if (this.hidenewRestaurant == false) 
	  {
		  this.hidenewRestaurant= true
      }
	  
  }

}
