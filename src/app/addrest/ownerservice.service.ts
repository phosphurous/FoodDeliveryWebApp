import { Injectable } from '@angular/core';

import { myOwner } from './myOwner';
import { listOfOwners } from './mock-owners';

@Injectable()
export class OwnerserviceService {

  constructor() { }

  getOwners(): myOwner[] 
  {
	return listOfOwners;
  }
  
  addOwner(item: myOwner): void 
    {
       listOfOwners.push(item);	   
    }
}
