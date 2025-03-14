import { CanActivateChildFn } from '@angular/router';

export const authorizationGuard: CanActivateChildFn = (route, state) => {
  console.log("CanActivateChildFn");
  const role = sessionStorage.getItem('role detail');
  if (role && role === 'Admin') {
    return true;
  }
  return false;
};
