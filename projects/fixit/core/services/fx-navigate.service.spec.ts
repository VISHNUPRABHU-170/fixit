import { TestBed } from '@angular/core/testing';

import { FxNavigateServiceService } from './fx-navigate-service.service';

describe('FxNavigateServiceService', () => {
  let service: FxNavigateServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FxNavigateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
