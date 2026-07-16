// Hands-On 9 — Course Actions
// Convention: '[Feature] Event Description' prefix groups actions in Redux DevTools.
// Filter by '[Course]' in DevTools timeline to see only course-related actions.
import { createAction, props } from '@ngrx/store';
import { Course } from '../../models/course.model';

// Trigger — dispatched by component in ngOnInit
export const loadCourses = createAction('[Course] Load Courses');

// Success — dispatched by Effect after HTTP resolves
export const loadCoursesSuccess = createAction(
  '[Course] Load Courses Success',
  props<{ courses: Course[] }>()
);

// Failure — dispatched by Effect when HTTP errors
export const loadCoursesFailure = createAction(
  '[Course] Load Courses Failure',
  props<{ error: string }>()
);
