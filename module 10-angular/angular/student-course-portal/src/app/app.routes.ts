import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { CoursesLayout } from './pages/courses-layout/courses-layout';
import { StudentProfile } from './pages/student-profile/student-profile';
import { NotFound } from './pages/not-found/not-found';
import { authGuard } from './guards/auth.guard';
import { unsavedChangesGuard } from './guards/unsaved-changes.guard';

export const routes: Routes = [
  { path: '', component: Home },
  {
    path: 'courses',
    component: CoursesLayout,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/course-list/course-list').then(m => m.CourseList)
      },
      {
        path: ':id',
        loadComponent: () =>
          import('./pages/course-detail/course-detail').then(m => m.CourseDetail)
      }
    ]
  },
  {
    path: 'enroll',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./features/enrollment/enrollment.routes').then(m => m.enrollmentRoutes)
  },
  {
    path: 'enroll-reactive',
    canActivate: [authGuard],
    canDeactivate: [unsavedChangesGuard],
    loadComponent: () =>
      import('./pages/reactive-enrollment-form/reactive-enrollment-form').then(
        m => m.ReactiveEnrollmentForm
      )
  },
  {
    path: 'profile',
    canActivate: [authGuard],
    component: StudentProfile
  },
  { path: '**', component: NotFound }
];
