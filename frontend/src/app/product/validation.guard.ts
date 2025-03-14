import { CanActivateFn } from '@angular/router';

export const urlValidationGuard: CanActivateFn = (route, state) => {
  console.log("CanActivateFn urlValidationGuard");
  return state.url.includes('?id=') && !state.url.endsWith('?id=');
};
