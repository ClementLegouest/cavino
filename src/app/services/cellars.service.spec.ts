import { TestBed } from '@angular/core/testing';

import { CellarsService } from './cellars.service';

describe('CellarsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CellarsService = TestBed.get(CellarsService);
    expect(service).toBeTruthy();
  });
});
