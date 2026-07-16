// Hands-On 8 — LoadingService
// BehaviorSubject holds the current loading state and emits to all subscribers.
// The LoadingInterceptor sets it to true/false around every HTTP call.
// Components bind to isLoading$ using the async pipe — no manual subscription needed.
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  // BehaviorSubject: always has a current value; new subscribers immediately get it
  private loadingSubject = new BehaviorSubject<boolean>(false);

  // Exposed as Observable so consumers cannot call .next() directly
  isLoading$ = this.loadingSubject.asObservable();

  show(): void { this.loadingSubject.next(true); }
  hide(): void { this.loadingSubject.next(false); }
}
