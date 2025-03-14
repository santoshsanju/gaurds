import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { urlValidationGuard } from './validation.guard';

describe('urlValidationGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => urlValidationGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
