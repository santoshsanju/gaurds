import { CanActivateFn } from '@angular/router';

export const authenticationGuard: CanActivateFn = (route, state) => {
  console.log("CanActivateFn");
  const loginData = sessionStorage.getItem('login credentials');
  if (loginData) {
    const { username, password } = JSON.parse(atob(loginData));
    if (username === 'test@gmail.com' && password === '1234') {
      return true;
    }
    return false;
  }
  return false;
};
