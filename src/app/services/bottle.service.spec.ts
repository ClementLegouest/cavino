import { TestBed } from '@angular/core/testing';

import { BottleService } from './bottle.service';

describe('BottleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BottleService = TestBed.get(BottleService);
    expect(service).toBeTruthy();
  });
});
