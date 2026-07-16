// Hands-On 7 — AuthGuard (CanActivate)
// Protects /profile and /enroll routes.
// If isLoggedIn is false → redirects to '/' and returns false (blocks navigation).
// If isLoggedIn is true  → returns true (allows navigation).
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn) {
    return true;
  }

  // Not logged in — redirect to home and block navigation
  router.navigate(['/']);
  return false;
};
