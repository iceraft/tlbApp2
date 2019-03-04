import { TestBed } from '@angular/core/testing';

import { WkRegimateService } from './wk-regimate.service';

describe('WkRegimateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WkRegimateService = TestBed.get(WkRegimateService);
    expect(service).toBeTruthy();
  });
});
