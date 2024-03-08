import { Component, OnInit } from '@angular/core';

import { Product2 } from './product2';
import { Product2Service } from './product2.service';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css']
})
export class Product2Component implements OnInit {
	
	title = 'Viewing Western Menu'

	private products2: Product2[]; 
	
  constructor(private product2Service: Product2Service) { }
  
  ngOnInit()
  {
	  this.products2 = this.product2Service.findAll();
  }

}
