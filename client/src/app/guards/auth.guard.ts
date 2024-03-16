import { CanActivateFn, Router } from '@angular/router';
import { inject } from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token');
  if (token) {
    return true;
  } else {
    // Redirect to the login page if not authenticated
    const router: Router = inject(Router);
    router.navigate(['/login']);
    return false;
  }
};
