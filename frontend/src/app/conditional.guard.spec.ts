import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { conditionalGuard } from './conditional.guard';

describe('conditionalGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => conditionalGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
