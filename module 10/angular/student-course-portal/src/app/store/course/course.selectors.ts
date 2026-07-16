// Hands-On 9 — Course Selectors
// Selectors are MEMOISED — they only recompute when their input selectors change.
// This is NgRx's key performance optimisation: no wasted re-renders.
// createFeatureSelector reads the 'course' slice from the root state.
// createSelector composes input selectors to derive specific pieces.
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CourseState } from './course.reducer';

// Top-level selector — reads the entire 'course' feature slice
export const selectCourseState = createFeatureSelector<CourseState>('course');

// Derived selectors — each one projects a specific field from the slice
export const selectAllCourses = createSelector(
  selectCourseState,
  state => state.courses
);

export const selectCoursesLoading = createSelector(
  selectCourseState,
  state => state.loading
);

export const selectCoursesError = createSelector(
  selectCourseState,
  state => state.error
);
