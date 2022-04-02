import { TestBed } from '@angular/core/testing';

import { FunctionRolService } from './function-rol.service';

describe('FunctionRolService', () => {
  let service: FunctionRolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunctionRolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
