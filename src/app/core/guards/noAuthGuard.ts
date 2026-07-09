import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../features/auth/services/AuthService';

export const noAuthGuard: CanActivateFn = () => {
  const authService = inject(AuthService);

  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return router.createUrlTree(['/inicio']);
  }

  return true;
};
