import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from "../services/auth.service";

export const loggedInAuthGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const token = authService.getToken();
  if (token) {
    // Redirect to the profile page if authenticated
    const router: Router = inject(Router);
    router.navigate(['']);
    return false;
  } else {
    return true;
  }
};
