// Hands-On 8 — ErrorHandlerInterceptor
// Globally intercepts HTTP error responses.
// 401 → navigates to home (session expired / unauthorized)
// 500 → logs a global server error
// Always re-throws so the component's own error handler also receives it.
import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        console.warn('[ErrorInterceptor] 401 Unauthorized — redirecting to home');
        router.navigate(['/']);
      } else if (error.status === 500) {
        console.error('[ErrorInterceptor] 500 Server Error:', error.message);
      } else {
        console.error(`[ErrorInterceptor] HTTP ${error.status}:`, error.message);
      }
      // Re-throw so the component's catchError also receives the error
      return throwError(() => error);
    })
  );
};
