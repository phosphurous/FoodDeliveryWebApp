import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	
	names:any;
	
  constructor() {
        this.names = ['Chinese','Western']
	}

  ngOnInit() {
  }
  
}


