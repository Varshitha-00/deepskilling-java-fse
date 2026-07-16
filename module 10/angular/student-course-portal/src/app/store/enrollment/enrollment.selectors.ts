// Hands-On 9 — Enrollment Selectors
// selectEnrolledCourses is a CROSS-SLICE selector — it combines course and enrollment state
// to derive full Course objects from enrolled IDs without duplicating state.
// createSelector with multiple input selectors is NgRx's answer to computed/derived data.
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EnrollmentState } from './enrollment.reducer';
import { selectAllCourses } from '../course/course.selectors';

export const selectEnrollmentState =
  createFeatureSelector<EnrollmentState>('enrollment');

// Selects the raw array of enrolled course IDs
export const selectEnrolledIds = createSelector(
  selectEnrollmentState,
  state => state.enrolledCourseIds
);

// Cross-slice selector: joins enrollment IDs with course objects from the course slice.
// Only recomputes when either selectAllCourses or selectEnrolledIds changes (memoised).
export const selectEnrolledCourses = createSelector(
  selectAllCourses,
  selectEnrolledIds,
  (courses, enrolledIds) => courses.filter(c => enrolledIds.includes(c.id))
);
