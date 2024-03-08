import { Component, OnInit } from '@angular/core';

import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
	
	title = 'Viewing Chinese Menu'
	
	/*productsMenu = [ {
		"id": 1,
		"name": "Fried Noodles",
		"image": "https://supervalu.ie/thumbnail/720x400/var/files/good-food-karma/recipe/48779/egg-noodle-stir-fry-recipe-main.jpg?fill=1",
		"description": "Stir-fry egg noodles with broccoli, carrot and squid.",
		"price": 0.40
	},
	{
		"id": 2,
		"name": "Fried Rice",
		"image": "https://i.ytimg.com/vi/QeQCihhjzbg/maxresdefault.jpg",
		"description": "Stir-fry fried rice with egg and seafood.",
		"price": 7.50
	}];*/

	private products: Product[]; 
	
  constructor(private productService: ProductService) { }
  
  ngOnInit()
  {
	  this.products = this.productService.findAll();
  }

}
