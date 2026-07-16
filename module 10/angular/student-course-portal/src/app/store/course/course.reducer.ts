// Hands-On 9 — Course Reducer
// Reducers are PURE functions — they must not mutate state or cause side effects.
// They receive the current state + action, and return a NEW state object.
// The NgRx runtime calls this on every dispatched action.
import { createReducer, on } from '@ngrx/store';
import { Course } from '../../models/course.model';
import { loadCourses, loadCoursesSuccess, loadCoursesFailure } from './course.actions';

// State shape for the course feature slice
export interface CourseState {
  courses: Course[];
  loading: boolean;
  error: string | null;
}

// Initial state — matches the shape above
export const initialCourseState: CourseState = {
  courses: [],
  loading: false,
  error: null
};

export const courseReducer = createReducer(
  initialCourseState,

  // loadCourses dispatched → set loading = true, clear previous error
  on(loadCourses, state => ({
    ...state,
    loading: true,
    error: null
  })),

  // HTTP succeeded → store courses, clear loading
  on(loadCoursesSuccess, (state, { courses }) => ({
    ...state,
    courses,
    loading: false,
    error: null
  })),

  // HTTP failed → store error message, clear loading
  on(loadCoursesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
