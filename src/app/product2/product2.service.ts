import { Injectable } from '@angular/core';

import { Product2 } from './product2';

export class Product2Service
{
	private products2: Product2[];
	
	constructor()
	{
		this.products2 = [
			{ id: 'p1', name: 'Chicken Chop', price: 10.00, image: 'http://keeprecipes.com/sites/keeprecipes/files/101-blackpepper-chicken-chop.jpg', description: 'Chicken chop in mushroom sauce with broccoli and french fries.' },
			{ id: 'p2', name: 'Creamy Mushroom Pasta', price: 7.90, image: 'http://images.media-allrecipes.com/userphotos/960x960/3757547.jpg', description: 'Spaghetti dip in cream sauce with button mushrooms and broccoli.' }
			
		];
	}
	
	findAll(): Product2[]
	{
		return this.products2;
	}
	
	find(id: string): Product2 
	{
		return this.products2[this.getSelectedIndex(id)];
	}
	
	private getSelectedIndex (id: string)
	{
		for ( var i = 0; i < this.products2.length; i++)
		{
			if (this.products2[i].id == id)
			{
				return i;
			}
		}
		
		return -1;
	}
}