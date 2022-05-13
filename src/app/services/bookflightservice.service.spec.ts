import { TestBed } from '@angular/core/testing';

import { BookflightserviceService } from './bookflightservice.service';

describe('BookflightserviceService', () => {
  let service: BookflightserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookflightserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
