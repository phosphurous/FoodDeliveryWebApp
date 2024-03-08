import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

import { OwnerserviceService } from './ownerservice.service';
import { myOwner } from './myOwner';

//google maps (import the necessary classes: NgZone, OnInit, ViewChild, FormControl and MapsAPILoader.)
import { ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-addrest',
  templateUrl: './addrest.component.html',
  styleUrls: ['./addrest.component.css']
})
export class AddrestComponent implements OnInit {
	myForm: FormGroup;
	edited = false;
	
	thisone = "";
	store: myOwner[] = [];
	newItem : myOwner;
	
	// google maps (define our public variables to store the latitude, longitude, zoom and our searchControl)
	public latitude: number;
	public longitude: number;
	public searchControl: FormControl;
	public zoom: number;

	// Using the @ViewChild decorator to get access to the DOM input element. The @ViewChild decorator accepts a single string that is the selector to the element or directive. In this case I am referencing the local template variable #search. It decorates the variable searchElementRef, which is an ElementRef to the search input.
	@ViewChild("search")
	public searchElementRef: ElementRef;


	//using dependency injections to inject the MapsAPILoader and NgZone dependencies. NgZone service enables us to perform asynchronous operations outside of the Angular zone, or in our case, to explicitly run a function within the Angular zone. 
	//BUT Angular zones are not patching the asynchronous behavior of Google Place autocomplete.
  constructor(private fb: FormBuilder, private ownerService: OwnerserviceService, private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) {

  }

  ngOnInit() {
		this.myForm = this.fb.group({
		name: '',
		ownname: '',
		password: '',
		email: '',
		phone: '',
		location: ''
  });
  
  //set google maps defaults, initial values for zoom, latitute and longitude. 
    this.zoom = 12;
    this.latitude = 1.352083;
    this.longitude = 103.81983600000001;

    //create search FormControl
	//Create a new FormControl() instance for the searchControl.
    this.searchControl = new FormControl();

    //set current position
	//Calling method.
    this.setCurrentPosition();

    //load Places Autocomplete
	// Use the load() method in the MapsAPILoader to load the Google Places API.
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
	  
	  // Attach an event handler to the place_changed event for the autocomplete.
      autocomplete.addListener("place_changed", () => {
		  
		// Wrap our asynchronous code within the NgZone.run() method.
		// Within the run() method we will store the data returns from the Google Maps Places API, including updating our map’s latitude and longitude. Without this, the changes to our latitude, longitude and zoom will not be triggered.
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
		  //The === operator checks value and type.
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 18;
        });
      });
    });
  }
  
  onSubmit()
  {
	  this.edited = true;
	  
	  this.newItem = new myOwner();
	  this.newItem.name = this.myForm.value.name;
	  this.newItem.ownname = this.myForm.value.ownname;
	  this.newItem.password = this.myForm.value.password;
	  this.newItem.email = this.myForm.value.email;
	  this.newItem.phone = this.myForm.value.phone;
	  this.newItem.location = this.myForm.value.location;
	  	  
	  this.ownerService.addOwner(this.newItem);
	  
	  this.myForm.reset();
	  
	  this.store = this.ownerService.getOwners();
	  let arrayLastIndex = this.store.length-1;
	  this.thisone = this.store[arrayLastIndex].name;
  }
  
  //This will simply attempt to use the geolocation API in the browser to set the map to the user’s current location.
  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

}

