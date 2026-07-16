// Hands-On 7 — UnsavedChangesGuard (CanDeactivate)
// Applied to ReactiveEnrollmentForm to warn the user when they try to navigate
// away from a dirty (modified) form.
// canDeactivate returns true  → navigation proceeds
// canDeactivate returns false → navigation is blocked (user stays on the page)
import { CanDeactivateFn } from '@angular/router';
import { ReactiveEnrollmentForm } from '../pages/reactive-enrollment-form/reactive-enrollment-form';

export const unsavedChangesGuard: CanDeactivateFn<ReactiveEnrollmentForm> = (component) => {
  // enrollForm.dirty is true when the user has changed any field value
  if (component.enrollForm?.dirty) {
    return window.confirm('You have unsaved changes. Leave anyway?');
  }
  return true;
};
