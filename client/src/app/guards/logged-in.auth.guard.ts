import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loggedInAuthGuard: CanActivateFn = () => {
  const token = localStorage.getItem('token');
  if (token) {
    // Redirect to the profile page if authenticated
    const router: Router = inject(Router);
    router.navigate(['']);
    return false;
  } else {
    return true;
  }
};
