import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { alertGuard } from './alert.guard';

describe('alertGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => alertGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
