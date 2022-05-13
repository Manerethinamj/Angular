import { TestBed } from '@angular/core/testing';

import { ManageDiscountServiceService } from './manage-discount-service.service';

describe('ManageDiscountServiceService', () => {
  let service: ManageDiscountServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageDiscountServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
