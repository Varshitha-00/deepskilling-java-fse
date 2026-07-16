// Hands-On 8 — LoadingInterceptor
// Sets LoadingService.isLoading$ = true before the request fires,
// and false in finalize() — which runs whether the request succeeds OR errors.
// finalize is the RxJS equivalent of a finally block — guaranteed cleanup.
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);

  loadingService.show();

  return next(req).pipe(
    // finalize runs on complete, error, OR unsubscribe — correct place to hide spinner
    finalize(() => loadingService.hide())
  );
};
