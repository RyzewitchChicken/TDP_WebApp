import { TestBed } from '@angular/core/testing';

import { FamProductsService } from './fam-products.service';

describe('FamProductsService', () => {
  let service: FamProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FamProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
