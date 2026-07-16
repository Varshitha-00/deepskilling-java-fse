// Hands-On 9 — Enrollment Reducer
// Manages the list of enrolled course IDs as immutable state.
// No mutation — always return new arrays.
import { createReducer, on } from '@ngrx/store';
import { enrollInCourse, unenrollFromCourse, setEnrolledCourses } from './enrollment.actions';

export interface EnrollmentState {
  enrolledCourseIds: number[];
}

export const initialEnrollmentState: EnrollmentState = {
  enrolledCourseIds: []
};

export const enrollmentReducer = createReducer(
  initialEnrollmentState,

  on(enrollInCourse, (state, { courseId }) => ({
    ...state,
    // Only add if not already enrolled — prevent duplicates
    enrolledCourseIds: state.enrolledCourseIds.includes(courseId)
      ? state.enrolledCourseIds
      : [...state.enrolledCourseIds, courseId]
  })),

  on(unenrollFromCourse, (state, { courseId }) => ({
    ...state,
    enrolledCourseIds: state.enrolledCourseIds.filter(id => id !== courseId)
  })),

  on(setEnrolledCourses, (state, { courseIds }) => ({
    ...state,
    enrolledCourseIds: [...courseIds]
  }))
);
