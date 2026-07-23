import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap, retry, switchMap } from 'rxjs/operators';
import { Course } from '../models/course.model';

@Injectable({ providedIn: 'root' })
export class CourseService {
  private readonly apiUrl = 'http://localhost:3000/courses';

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl).pipe(
      tap(courses => console.log('[CourseService] Courses loaded:', courses.length)),
      map(courses => courses.filter(c => c.credits > 0)),
      retry(2),
      catchError(err => {
        console.error('[CourseService] getCourses error:', err);
        return throwError(() => new Error('Failed to load courses. Please try again.'));
      })
    );
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${id}`).pipe(
      tap(course => console.log('[CourseService] Course loaded:', course.name)),
      catchError(err => {
        console.error(`[CourseService] getCourseById(${id}) error:`, err);
        return throwError(() => new Error(`Course ${id} not found.`));
      })
    );
  }

  createCourse(course: Omit<Course, 'id'>): Observable<Course> {
    return this.http.post<Course>(this.apiUrl, course).pipe(
      tap(created => console.log('[CourseService] Course created:', created.id)),
      catchError(err => {
        console.error('[CourseService] createCourse error:', err);
        return throwError(() => new Error('Failed to create course.'));
      })
    );
  }

  updateCourse(id: number, course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.apiUrl}/${id}`, course).pipe(
      tap(updated => console.log('[CourseService] Course updated:', updated.id)),
      catchError(err => {
        console.error(`[CourseService] updateCourse(${id}) error:`, err);
        return throwError(() => new Error('Failed to update course.'));
      })
    );
  }

  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => console.log('[CourseService] Course deleted:', id)),
      catchError(err => {
        console.error(`[CourseService] deleteCourse(${id}) error:`, err);
        return throwError(() => new Error('Failed to delete course.'));
      })
    );
  }

  getEnrolledStudentsByCourse(courseId$: Observable<number>): Observable<any[]> {
    return courseId$.pipe(
      switchMap(courseId =>
        this.http.get<any[]>(`http://localhost:3000/enrollments?courseId=${courseId}`).pipe(
          catchError(() => throwError(() => new Error('Failed to load enrollments.')))
        )
      )
    );
  }

  getFallbackCourses(): Course[] {
    return [
      { id: 1, name: 'Data Structures',   code: 'CS101', credits: 4, gradeStatus: 'passed'  },
      { id: 2, name: 'Algorithms',        code: 'CS102', credits: 3, gradeStatus: 'pending' },
      { id: 3, name: 'Database Systems',  code: 'CS201', credits: 4, gradeStatus: 'failed'  },
      { id: 4, name: 'Operating Systems', code: 'CS301', credits: 3, gradeStatus: 'passed'  },
      { id: 5, name: 'Computer Networks', code: 'CS401', credits: 2, gradeStatus: 'pending' }
    ];
  }

  getCourseByIdSync(id: number): Course | undefined {
    return this.getFallbackCourses().find(c => c.id === id);
  }
}
