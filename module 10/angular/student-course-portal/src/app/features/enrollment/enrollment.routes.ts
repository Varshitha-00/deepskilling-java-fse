// Hands-On 7 — Enrollment Feature Routes (lazy loaded)
// These routes are loaded on demand when the user first visits /enroll or /enroll-reactive.
// Angular downloads a separate JS chunk only at that point — not on initial app load.
// Verify in Chrome DevTools → Network: a new chunk file appears on first /enroll visit.
import { Routes } from '@angular/router';
import { unsavedChangesGuard } from '../../guards/unsaved-changes.guard';

export const enrollmentRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../../pages/enrollment-form/enrollment-form').then(m => m.EnrollmentForm)
  },
  {
    path: 'reactive',
    canDeactivate: [unsavedChangesGuard],
    loadComponent: () =>
      import('../../pages/reactive-enrollment-form/reactive-enrollment-form').then(
        m => m.ReactiveEnrollmentForm
      )
  }
];
