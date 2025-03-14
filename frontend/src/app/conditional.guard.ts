import { CanActivateFn } from '@angular/router';

export const conditionalGuard: CanActivateFn = (route, state) => {
  console.log("conditionalGuard");
  const role = sessionStorage.getItem('role detail');
  if (role && role == 'Admin') {
    return true;
  }
  return false;
};
export const reverseConditionalGuard: CanActivateFn = (route, state) => {
  console.log("reverseConditionalGuard");
  const role = sessionStorage.getItem('role detail');
  if (role && role != 'Admin') {
    return true;
  }
  return false;
};
