import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { CourseService } from '../../services/course.service';
import { loadCourses, loadCoursesSuccess, loadCoursesFailure } from './course.actions';

export const loadCourses$ = createEffect(
  (
    actions$ = inject(Actions),
    courseService = inject(CourseService)
  ) =>
    actions$.pipe(
      ofType(loadCourses),
      switchMap(() =>
        courseService.getCourses().pipe(
          map(courses => loadCoursesSuccess({ courses })),
          catchError(error =>
            of(loadCoursesFailure({ error: error.message ?? 'Unknown error' }))
          )
        )
      )
    ),
  { functional: true }
);
