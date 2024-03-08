import { TestBed, inject } from '@angular/core/testing';

import { OwnerserviceService } from './ownerservice.service';

describe('OwnerserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OwnerserviceService]
    });
  });

  it('should be created', inject([OwnerserviceService], (service: OwnerserviceService) => {
    expect(service).toBeTruthy();
  }));
});
