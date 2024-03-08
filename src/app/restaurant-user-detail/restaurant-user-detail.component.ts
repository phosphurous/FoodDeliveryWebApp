import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'restaurant-user-detail',
  templateUrl: './restaurant-user-detail.component.html',
  styleUrls: ['./restaurant-user-detail.component.css'],
  
  inputs: ['restaurant']
})
export class RestaurantUserDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  

}
