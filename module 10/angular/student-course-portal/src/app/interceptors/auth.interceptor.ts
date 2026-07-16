// Hands-On 8 — AuthInterceptor
// Clones every outgoing HTTP request and attaches an Authorization header.
// Interceptors run in registration order for requests; reverse order for responses.
// Verify: Chrome DevTools → Network → select any API call → Request Headers → Authorization
import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Clone the request — HttpRequest is immutable, so we must clone to modify
  const authReq = req.clone({
    setHeaders: {
      Authorization: 'Bearer mock-token-12345'
    }
  });
  return next(authReq);
};
