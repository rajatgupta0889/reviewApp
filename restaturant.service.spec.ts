import { TestBed } from '@angular/core/testing';

import { RestaturantService } from './restaturant.service';

describe('RestaturantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestaturantService = TestBed.get(RestaturantService);
    expect(service).toBeTruthy();
  });
});
