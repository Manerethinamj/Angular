import { TestBed } from '@angular/core/testing';

import { ManageAirlineServiceService } from './manage-airline-service.service';

describe('ManageAirlineServiceService', () => {
  let service: ManageAirlineServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageAirlineServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
