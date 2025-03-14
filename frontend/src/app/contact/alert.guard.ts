import { CanActivateFn } from '@angular/router';

export const alertGuard: CanActivateFn = (route, state) => {
  return confirm('Are sure you are moving out') === true;
};
