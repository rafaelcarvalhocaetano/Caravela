import { TestBed } from '@angular/core/testing';

import { VocationsService } from './vocations.service';

describe('VocationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VocationsService = TestBed.get(VocationsService);
    expect(service).toBeTruthy();
  });
});
