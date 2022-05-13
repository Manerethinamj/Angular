import { TestBed } from '@angular/core/testing';

import { SearchAirlineService } from './search-airline.service';

describe('SearchAirlineService', () => {
  let service: SearchAirlineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchAirlineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
