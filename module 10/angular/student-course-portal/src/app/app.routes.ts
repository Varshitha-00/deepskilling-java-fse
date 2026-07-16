// Hands-On 7 — Complete Route Configuration
// Route matching is ORDER-SENSITIVE — Angular checks routes top to bottom.
// The ** wildcard MUST be last — placing it earlier would catch all routes.
import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { CoursesLayout } from './pages/courses-layout/courses-layout';
import { StudentProfile } from './pages/student-profile/student-profile';
import { NotFound } from './pages/not-found/not-found';
import { authGuard } from './guards/auth.guard';
import { unsavedChangesGuard } from './guards/unsaved-changes.guard';

export const routes: Routes = [
  // Home
  { path: '', component: Home },

  // Courses — nested routes rendered inside CoursesLayout's <router-outlet>
  {
    path: 'courses',
    component: CoursesLayout,
    children: [
      {
        // /courses → CourseListComponent (lazy)
        path: '',
        loadComponent: () =>
          import('./pages/course-list/course-list').then(m => m.CourseList)
      },
      {
        // /courses/:id → CourseDetailComponent (lazy)
        // route.snapshot.paramMap.get('id') reads the :id segment
        path: ':id',
        loadComponent: () =>
          import('./pages/course-detail/course-detail').then(m => m.CourseDetail)
      }
    ]
  },

  // Enrollment — lazy-loaded feature (separate JS chunk downloaded on first visit)
  // /enroll        → EnrollmentForm (template-driven)
  // /enroll/reactive → ReactiveEnrollmentForm (with CanDeactivate guard)
  {
    path: 'enroll',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./features/enrollment/enrollment.routes').then(m => m.enrollmentRoutes)
  },

  // /enroll-reactive — with both CanActivate AND CanDeactivate guards
  {
    path: 'enroll-reactive',
    canActivate: [authGuard],
    canDeactivate: [unsavedChangesGuard],
    loadComponent: () =>
      import('./pages/reactive-enrollment-form/reactive-enrollment-form').then(
        m => m.ReactiveEnrollmentForm
      )
  },

  // Profile — protected by AuthGuard
  {
    path: 'profile',
    canActivate: [authGuard],
    component: StudentProfile
  },

  // 404 — wildcard MUST be last
  { path: '**', component: NotFound }
];
