import { CanActivateFn, Router } from '@angular/router';
import { inject } from "@angular/core";
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const token = authService.getToken();
  if (token) {
    return true;
  } else {
    // Redirect to the login page if not authenticated
    const router: Router = inject(Router);
    router.navigate(['/login']);
    return false;
  }
};
