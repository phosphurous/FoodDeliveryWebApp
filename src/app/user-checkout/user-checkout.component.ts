import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { CartComponent } from './../cart/cart.component'

@Component({
  selector: 'app-user-checkout',
  templateUrl: './user-checkout.component.html',
  styleUrls: ['./user-checkout.component.css']
})
export class UserCheckoutComponent implements OnInit {

  myForm: FormGroup;
	edited = false;
	
	showForm= true;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
		this.myForm = this.fb.group({
		name: '',
		email: '',
		phone: '',
		address: ''
  });
  
  }
  
  onSubmit()
  {
	this.edited = true;
	
  }
  
  start()
  {
	setTimeout(() => {
    this.router.navigate(['home']);
    }, 3000);  //3s
  }

}
