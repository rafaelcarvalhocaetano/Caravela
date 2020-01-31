import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { VocationsService } from './vocations.service';

describe('VocationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
    providers: [
      VocationsService
    ]
  }));

  it('should be created', () => {
    const service: VocationsService = TestBed.get(VocationsService);
    expect(service).toBeTruthy();
  });
});
