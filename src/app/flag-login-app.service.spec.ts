import { TestBed } from '@angular/core/testing';

import { FlagLoginAppService } from './flag-login-app.service';

describe('FlagLoginAppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlagLoginAppService = TestBed.get(FlagLoginAppService);
    expect(service).toBeTruthy();
  });
});
