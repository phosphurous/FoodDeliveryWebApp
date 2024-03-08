import { Component, OnInit } from '@angular/core';

import { Product } from './../product/product';
import { ProductadminService } from './productadmin.service';

@Component({
  selector: 'app-productadmin',
  templateUrl: './productadmin.component.html',
  styleUrls: ['./productadmin.component.css']
})
export class ProductadminComponent {
	
	title = 'Viewing Menu - Admin'

	private products: Product[]; 
	
  constructor(private productadminService: ProductadminService) { }
  
  ngOnInit()
  {
	  this.products = this.productadminService.findAll();
  }

}
