import { Injectable } from '@angular/core';

import { Product } from './product';

export class ProductService
{
	private products: Product[];
	
	constructor()
	{
		this.products = [
			{ id: 'p1', name: 'Fried Noodles', price: 8.00, image: 'https://supervalu.ie/thumbnail/720x400/var/files/good-food-karma/recipe/48779/egg-noodle-stir-fry-recipe-main.jpg?fill=1', description: 'Stir-fry egg noodles with broccoli, carrot and squid.' },
			{ id: 'p2', name: 'Fried Rice', price: 7.50, image: 'https://i.ytimg.com/vi/QeQCihhjzbg/maxresdefault.jpg', description: 'Fried rice with egg and seafood.' }
			
		];
	}
	
	findAll(): Product[]
	{
		return this.products;
	}
	
	find(id: string): Product 
	{
		return this.products[this.getSelectedIndex(id)];
	}
	
	private getSelectedIndex (id: string)
	{
		for ( var i = 0; i < this.products.length; i++)
		{
			if (this.products[i].id == id)
			{
				return i;
			}
		}
		
		return -1;
	}
}