import { Injectable } from '@angular/core';

import { Restaurant } from './restaurant';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class RestaurantService {
	
	private _getUrl = "/api/restaurants";
	private _postUrl = "/api/restaurant";
	
	//this has a '/' behind is because the ID needs to be provided for the code to delete.
	private _putUrl = "/api/restaurant/";
	private _deleteUrl = "/api/restaurant/";
	
  constructor(private _http: Http) 
  {
		
  }
  
  getRestaurants()
  {
	  //make use of the http instance and calling the get method to pass the url. Once all the restaurants are fetched, it will be mapped to json.
	  return this._http.get(this._getUrl)
	  .map((response: Response) => response.json());
  }
  
  
  //Make a post request to the server and will insert the video that is passed. And then we get back a response of that inserted Video. Going back to center.component.ts
  addRestaurant(restaurant: Restaurant)
  {
	  //making this available in RequestOptions
	  let headers = new Headers({ 'Content-Type': 'application/json' });
	  //thus, inside the RequestOptions, we have an object 'headers' that is assigned to the headers.
	  let options = new RequestOptions ({ headers: headers });
	  //invoking post method on the http service to pass in the postURL, JSON.Stringify of the restaurant, then the options.
	  //When a data is inserted in to the DB, a response will be returned which is the data that was inserted. So, the response will be mapped to JSON.
	  return this._http.post(this._postUrl, JSON.stringify(restaurant), options)
		.map((response: Response) => response.json());
  }
  
  updateRestaurant(restaurant: Restaurant)
  {
	  let headers = new Headers({ 'Content-Type': 'application/json' });
	  let options = new RequestOptions ({ headers: headers });
	  //making a put request. We passed in the restaurant that has to be updated inside the database but this time we pass in the restaurant ID as part of the URL. 
	  
	  //then we will pass in the restaurant that has to be updated (In JSON.Stringify).
		//and then we MAP the response to JSON.
	  return this._http.put(this._putUrl + restaurant._id, JSON.stringify(restaurant), options)
		.map((response: Response) => response.json());
  }
  
  deleteRestaurant(restaurant: Restaurant)
  {
	  return this._http.delete(this._deleteUrl + restaurant._id)
		.map((response: Response) => response.json());
  }

}
