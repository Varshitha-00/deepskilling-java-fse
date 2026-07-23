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
