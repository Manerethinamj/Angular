import { TestBed } from '@angular/core/testing';

import { ActivateAirlineServiceService } from './activate-airline-service.service';

describe('ActivateAirlineServiceService', () => {
  let service: ActivateAirlineServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivateAirlineServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
